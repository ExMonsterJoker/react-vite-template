/**
 * Convert bbox from array of 4 points to {x, y, width, height}
 * @param {Array} points - Array of 4 points [[x1,y1], [x2,y2], [x3,y3], [x4,y4]]
 * @returns {Object} bbox {x, y, width, height}
 */
export const bboxPointsToRect = (points) => {
    if (!Array.isArray(points) || points.length !== 4) {
        throw new Error('Invalid bbox points format');
    }
    const xs = points.map(p => p[0]);
    const ys = points.map(p => p[1]);
    const x = Math.min(...xs);
    const y = Math.min(...ys);
    const width = Math.max(...xs) - x;
    const height = Math.max(...ys) - y;
    return { x, y, width, height };
};

/**
 * Convert bbox from {x, y, width, height} to array of 4 points
 * @param {Object} rect - bbox {x, y, width, height}
 * @returns {Array} points Array of 4 points [[x1,y1], [x2,y2], [x3,y3], [x4,y4]]
 */
export const rectToBboxPoints = (rect) => {
    if (!rect || typeof rect !== 'object') {
        throw new Error('Invalid bbox rect format');
    }
    const { x, y, width, height } = rect;
    return [
        [x, y],
        [x + width, y],
        [x + width, y + height],
        [x, y + height]
    ];
};
