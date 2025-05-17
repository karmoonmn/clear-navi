import React from 'react';

const StepNode = ({
   step,
   isSelected,
   completedCount,
   onStepClick
}) => {
   const maxWidth = 250; // Increased max width to accommodate larger text
   const lineHeight = 18; // Increased space between lines of text
   const padding = 15; // Increased padding inside the box

   // Calculate dynamic width based on content (with max limit)
   const minWidth = 200; // Increased minimum width
   // Adjusted calculation to estimate width better for larger text
   const calculatedWidth = Math.min(maxWidth, Math.max(minWidth, step.title.length * 8 + 50)); // Adjusted factor and base

   // Function to wrap text into multiple lines - adjusted text width estimation
   const wrapText = (text) => {
      const words = text.split(' ');
      const lines = [];
      let currentLine = words[0];

      for (let i = 1; i < words.length; i++) {
         const word = words[i];
         const testLine = currentLine + ' ' + word;
         // Approximate text width (adjusted character width estimate from 7 to 8)
         if (testLine.length * 8 <= maxWidth - 2 * padding) { // Used 8 here
            currentLine = testLine;
         } else {
            lines.push(currentLine);
            currentLine = word;
         }
      }
      lines.push(currentLine);
      return lines;
   };

   const titleLines = wrapText(step.title);
   // Adjusted base height and used new lineHeight for calculation
   const boxHeight = 70 + (titleLines.length - 1) * lineHeight; // Increased base height

   // Adjusted position and size for the completion indicator
   const indicatorOffsetX = 20; // Position from the left edge - Kept same, adjust if needed
   const indicatorOffsetY = 25; // Vertical center within the top part - Adjusted for larger circle/text
   const indicatorRadius = 10; // Increased radius of the circle
   const tickScale = 1.2; // Factor to scale the tick mark size

   return (
      <g
         transform={`translate(${step.position.x}, ${step.position.y})`}
         onClick={() => onStepClick(step)}
         className="cursor-pointer"
      >
         {/* Dynamic width and height rectangle */}
         <rect
            width={calculatedWidth}
            height={boxHeight}
            rx="10" // Slightly increased border radius for a larger box
            className={`${step.completed
               ? "fill-green-500 stroke-green-600"
               : isSelected
                  ? "fill-indigo-600 stroke-indigo-700"
                  : "fill-white hover:fill-indigo-100 stroke-indigo-200"
               } stroke-2 transition-colors duration-300`}
         />

         {/* Completion indicator */}
         {step.completed && (
            <>
               <circle cx={indicatorOffsetX} cy={indicatorOffsetY} r={indicatorRadius} className="fill-white stroke-green-600 stroke-1" /> {/* Used indicatorOffsetX, indicatorOffsetY, indicatorRadius */}
               <path
                  // Adjusted tick path coordinates based on new indicator position and scale
                  d={`M${indicatorOffsetX - 3 * tickScale},${indicatorOffsetY} L${indicatorOffsetX - 1 * tickScale},${indicatorOffsetY + 2 * tickScale} L${indicatorOffsetX + 3 * tickScale},${indicatorOffsetY - 2 * tickScale}`} // Scaled tick coordinates
                  stroke="green"
                  strokeWidth="2" // Kept stroke width same, adjust if needed
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
               />
            </>
         )}

         {/* Wrapped title text */}
         {titleLines.map((line, index) => (
            <text
               key={index}
               x={calculatedWidth / 2}
               y={35 + index * lineHeight} // Adjusted initial vertical position based on larger padding/icon
               className={`font-semibold text-base ${step.completed || isSelected ? 'fill-white' : 'fill-gray-700'}`} // Increased font size
               textAnchor="middle"
            >
               {line}
            </text>
         ))}

         {/* Completion text */}
         <text
            x={calculatedWidth / 2}
            y={60 + (titleLines.length - 1) * lineHeight} // Adjusted vertical position (more space from title) based on new base and lineHeight
            className={`pt-2 text-sm ${step.completed || isSelected ? 'fill-white' : 'fill-gray-600'}`} // Increased font size
            textAnchor="middle"
         >
            {completedCount}/{step.details.length} complete
         </text>
      </g>
   );
};

export default StepNode; 