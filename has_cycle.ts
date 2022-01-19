type arr = any[]|number[]|string[]

export const has_cycle = (Arr:arr):number => {
    if (Arr.length > 1000) {
        console.error("Rule infringed: 0 <= Array length <= 1000");
    }

    if (Arr.length === 1) return 0;

    let visited_items:arr = [];

    for (let i of Arr) {
        if (visited_items.length > 0) {
            for (let j of visited_items) {
                if (j === i) {
                    return 1;
                }
            }
        }
        visited_items.push(i)
    }
    return 0; 
}
