console.log(`...Iam running`);

//implementing Stack in java Script

class Stack {
    constructor(){
        this.item =[];
    }
}

push(element)
{
    this.item.push(element);
}

pop(){
    if(this.isEmpty())
    {
        return null;
    }

    return this.items.pop();
}

peek (){
    if(this.isEmpty())
    {
        return null;    }
        return this.item[this.item.length-1]
}

