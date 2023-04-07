
export const isItemExist = (id, arr) => arr.some(item => item.id === id);

export const defineInputType = string => {
    switch (string) {
        case 'precio':
            return 'number'
        default:
            return 'text';
    }
}

export const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);