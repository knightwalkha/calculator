function areaOfParallelogram(breadth, height, decimalPlace) {
    const area = breadth * height;
    return area.toFixed(decimalPlace);
}

function volumeOfCylinder(radius, height) {
    const pi = 3.142;
    return volume = pi * (radius * radius) *height;
}

function areaOfRectangle(length, breadth) {
    return length * breadth;
}

const calculator = {
    areaOfParallelogram: function(breadth, height, decimalPlace) {
        const area = breadth * height;
        return area.toFixed(decimalPlace);
    },

    volumeOfCylinder: function(radius, height) {
        const pi = 3.142;
        return volume = pi * (radius * radius) *height;
    },

    areaOfRectangle: function(length, breadth) {
        return length * breadth;
    }
}

console.log(calculator)