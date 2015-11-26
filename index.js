module.exports = function ObjectPropsEqual(objA, objB) {
    if (objA === objB) return true;
    if (!objA || !objB) return false;

    const objAKeys = Object.keys(objA);
    const objBKeys = Object.keys(objB);

    if (objAKeys.length !== objBKeys.length) return false;

    return objAKeys.every(key => {
        return objA[key] === objB[key];
    });
};
