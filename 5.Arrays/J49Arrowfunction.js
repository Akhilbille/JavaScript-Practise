const groceries =[
    {name : 'chilli', quantity:'10lb', category: 'vegetables'},
    {name : 'carrot', quantity:'50lb', category: 'vegetables'},
    {name : 'toordal', quantity: '50lb', category: 'lentals'}
]


console.log(groceries.find(item => item.name==='chilli'));
    