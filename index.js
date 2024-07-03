let flowerSet = [ 
    {name: "beautiful You", type: "Rose", price: 1199}, 
    {name: "Pixie Dream", type: "lisianthus & eucalyptus", price: 1899},
    {name: "Heartfelt Sweetness", type: "carnations & statice", price: 1500},
    {name: "Heather", type: "gerberas, carnations, & rosal", price: 1399}, 
    {name: "Ash", type: "preserved roses & dried blooms", price: 5299}
    ];

//customer buying//
let transactions = []
transactions.push({ pick: ["Pixie Dream", "Heather", "Ash"], total: 8597})
transactions.push({ pick: ["Heartfelt Sweetness", "beautiful You", "Heather"], total: 4098})

//calculating earns// 
const total = transactions.reduce((acc, curr) => acc + curr.total, 0);
    console.log(`Congrats Revo you've made ${total} pesos today sheeshh`);

    //Each flower earning//
let flowerDistribution = transactions.reduce((acc, curr) => {
    curr.pick.forEach(pick => {
        if(!acc[pick]) {
            acc[pick] = 0;
        }
        acc[pick]++;
    })
    return acc;
}, {})
console.log(flowerDistribution);