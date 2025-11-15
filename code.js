// This is the main plugin code that runs in the Figma environment
// DESIGN TOKENS
const TOKENS = {
    colors: {
        light: {
            icon: { r: 1 / 255, g: 36 / 255, b: 62 / 255 } // #01243E
        },
        dark: {
            icon: { r: 243 / 255, g: 243 / 255, b: 243 / 255 } // #F3F3F3
        }
    },
    spacing: {
        horizontal: 8, // Horizontal space between icons
        vertical: {
            16: 8,
            24: 12,
            36: 18,
            44: 22,
            60: 16
        }
    }
};
// Show the plugin UI
figma.showUI(__html__, { width: 400, height: 600 });
// Listen for messages from the UI
figma.ui.onmessage = async (msg) => {
    if (msg.type === 'create-pictogram') {
        // Extract parameters from the message
        const { totalCount, highlightCount, rows, cols, iconSize, horizontalSpacing, verticalSpacing, iconColor, highlightColor, randomize } = msg;
        // Create a frame to hold all the icons
        const frame = figma.createFrame();
        const personLabel = totalCount === 1 ? "person" : "people";
        frame.name = `People Pictogram (${highlightCount} of ${totalCount} ${personLabel} highlighted)`;
        frame.resize(cols * iconSize + (cols - 1) * horizontalSpacing, rows * iconSize + (rows - 1) * verticalSpacing);
        frame.fills = []; // Transparent background
        // Generate array of indices and optionally randomize which ones are highlighted
        let highlightedIndices = [];
        if (randomize) {
            // Create array of all indices
            const allIndices = Array.from({ length: totalCount }, (_, i) => i);
            // Shuffle and take first highlightCount items
            for (let i = allIndices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [allIndices[i], allIndices[j]] = [allIndices[j], allIndices[i]];
            }
            highlightedIndices = allIndices.slice(0, highlightCount);
        }
        else {
            // Sequential highlighting (first N items)
            highlightedIndices = Array.from({ length: highlightCount }, (_, i) => i);
        }
        // Generate the icons
        let iconIndex = 0;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (iconIndex >= totalCount)
                    break;
                // Check if this icon should be highlighted
                const isHighlighted = highlightedIndices.includes(iconIndex);
                // Use the same color for all icons (iconColor and highlightColor are the same)
                const color = iconColor;
                // Create person icon with proper styling
                const personIcon = await createPersonIcon(iconSize, isHighlighted, color);
                personIcon.name = `Person ${iconIndex + 1}`;
                personIcon.x = col * (iconSize + horizontalSpacing);
                personIcon.y = row * (iconSize + verticalSpacing);
                // Add to frame
                frame.appendChild(personIcon);
                iconIndex++;
            }
            if (iconIndex >= totalCount)
                break;
        }
        // Position frame at canvas 0, 0
        frame.x = 0;
        frame.y = 0;
        // Notify the UI that we're done
        figma.ui.postMessage({ type: 'pictogram-created' });
    }
    if (msg.type === 'cancel') {
        figma.closePlugin();
    }
};
// Helper function to create a person icon from SVG - exact same as preview
async function createPersonIcon(size, isHighlighted, color) {
    // Convert RGB object to hex color
    const r = Math.round(color.r * 255).toString(16).padStart(2, '0');
    const g = Math.round(color.g * 255).toString(16).padStart(2, '0');
    const b = Math.round(color.b * 255).toString(16).padStart(2, '0');
    const hexColor = `#${r}${g}${b}`;
    let svgString;
    if (isHighlighted) {
        // Solid icon for highlighted - exact SVG from preview
        svgString = `<svg width="14" height="22" viewBox="0 0 14 22" fill="${hexColor}" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00012 2.1C9.00012 0.94125 8.05887 0 6.90012 0C5.74137 0 4.80012 0.94125 4.80012 2.1C4.80012 3.25875 5.74137 4.2 6.90012 4.2C8.05887 4.2 9.00012 3.25875 9.00012 2.1ZM9.90012 10.0763L11.6364 12.4163C12.0301 12.9488 12.7839 13.0613 13.3164 12.6638C13.8489 12.2663 13.9614 11.5163 13.5639 10.9838L10.9201 7.42125C9.97512 6.15 8.48637 5.4 6.90012 5.4C5.31387 5.4 3.82512 6.15 2.88012 7.42125L0.23637 10.9838C-0.15738 11.5163 -0.0486301 12.2663 0.48387 12.6638C1.01637 13.0613 1.76637 12.9488 2.16387 12.4163L3.90012 10.0763V20.4C3.90012 21.0638 4.43637 21.6 5.10012 21.6C5.76387 21.6 6.30012 21.0638 6.30012 20.4V14.4C6.30012 14.07 6.57012 13.8 6.90012 13.8C7.23012 13.8 7.50012 14.07 7.50012 14.4V20.4C7.50012 21.0638 8.03637 21.6 8.70012 21.6C9.36387 21.6 9.90012 21.0638 9.90012 20.4V10.0763Z"/>
    </svg>`;
    }
    else {
        // Outline icon for non-highlighted - exact SVG from preview
        svgString = `<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.90039 5.7998C8.35983 5.79989 9.72904 6.49038 10.5986 7.66016V7.65918L13.2422 11.2217L13.2432 11.2227C13.5071 11.5763 13.4342 12.0761 13.0771 12.3428C12.7226 12.6075 12.2202 12.5331 11.958 12.1787V12.1777L10.2217 9.83789C10.1189 9.69932 9.93825 9.64215 9.77441 9.69629C9.61067 9.75046 9.50003 9.9037 9.5 10.0762V20.4004C9.49979 20.843 9.14287 21.2002 8.7002 21.2002C8.25749 21.2002 7.9006 20.843 7.90039 20.4004V14.4004C7.90039 13.8496 7.45118 13.4005 6.90039 13.4004C6.34948 13.4004 5.90039 13.8495 5.90039 14.4004V20.4004C5.90018 20.8429 5.54308 21.1999 5.10059 21.2002C4.65788 21.2002 4.30001 20.843 4.2998 20.4004V10.0762C4.29977 9.90365 4.1892 9.75042 4.02539 9.69629C3.86167 9.64231 3.68188 9.69947 3.5791 9.83789L1.84375 12.1768C1.5771 12.534 1.07733 12.6067 0.723633 12.3428C0.390343 12.094 0.30515 11.6393 0.512695 11.29L0.557617 11.2217L3.2002 7.65918L3.20117 7.66016C4.07082 6.49028 5.44083 5.7998 6.90039 5.7998ZM6.90039 0.400391C7.83797 0.400537 8.60037 1.16204 8.60059 2.09961C8.60059 3.03736 7.8381 3.79966 6.90039 3.7998C5.96255 3.7998 5.2002 3.03745 5.2002 2.09961C5.20041 1.16195 5.96268 0.400391 6.90039 0.400391Z" stroke="${hexColor}" stroke-width="0.8" stroke-linejoin="round"/>
    </svg>`;
    }
    // Create node from SVG
    const svgNode = figma.createNodeFromSvg(svgString);
    svgNode.name = isHighlighted ? "Highlighted person" : "Person";
    // The SVG is 14x22, scale it to desired size
    const scaleRatio = size / 22; // Scale based on height (22 is the viewBox height)
    svgNode.resize(14 * scaleRatio, 22 * scaleRatio);
    // Wrap in a frame to maintain consistent sizing
    const frame = figma.createFrame();
    frame.resize(size, size);
    frame.fills = [];
    frame.appendChild(svgNode);
    // Center the SVG in the frame
    svgNode.x = (size - svgNode.width) / 2;
    svgNode.y = 0;
    return frame;
}