let pelmeni = {
    a: 'отличные пельмени',
    b: 'плохие пельмени',
}

pelmeni = new Proxy(pelmeni, {
    set(target, prop, val) {
        if (val !== target.g && prop === 'g') {
            
        } else {
        console.log('Нет изменений')
        }
    },
})