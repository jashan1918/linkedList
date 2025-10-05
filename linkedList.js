class Node {

    constructor(value) {

        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {

    constructor() {
  
        this.head = null;
        this.tail = null;
 }

    append(value) {
        //create a new node
        let newNode = new Node(value);

        //check if the list is empty

        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            //add new node after current tail
            this.tail.nextNode = newNode;

            //move tail to the new next Node
            this.tail = newNode;
        }
    }

    prepend(value) {

        let newNode = new Node(value);

        if(this.head === null) {            
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.nextNode = this.head;
            this.head = newNode;
            
        }
    }

    size() {

        let count = 0;
        let currentNode = this.head;
        while(currentNode !== null) {
            count++;
            currentNode = currentNode.nextNode
        }
        return count;
    }

    getHead() {
        
        if(this.head === null) {
            return console.log("The list is empty");
        }

        else{
            return this.head;
        }
    }

     getTail() {
        
        if(this.head === null) {
            return console.log("The list is empty");
        }

        else{
            return this.tail;
        }
    }

    at(index) {
        let count = 0;
        let currentNode = this.head;

        while(currentNode !== null && count < index) {

            currentNode = currentNode.nextNode;
            count++;
        }
        return currentNode;
    }

    pop() {
        //check if the list is empty

        if (this.head === null) {
            return console.log("The list is empty!")
        }

            //edge case if there is only a single node
        if (this.head === this.tail) {
    const poppedNode = this.head;
    this.head = null;
    this.tail = null;
    return poppedNode;
}


        //traverse through the array to reach the second last node

        let currentNode = this.head;

        while(currentNode.nextNode !== this.tail) {
            currentNode = currentNode.nextNode;
        }

        //change the properties
        const poppedNode = this.tail;
        this.tail = currentNode;
        currentNode.nextNode = null;

        return poppedNode;
    }

    contains(value) {

        //check if the list is empty
        
        if(this.head === null) {

            return console.log("the list is empty");
        }

        //traverse through the list

        let currentNode = this.head;

        while(currentNode !== null) {

            if(currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;

        }
        return false;

    } 

    find(value) {
        //check if the list is empty

        if(this.head === null) {
            return console.log("the list is empty");
        }

        let currentNode = this.head;
        let index = 0;

        //traverse through the list

        while(currentNode !== null) {

        
            if(currentNode.value === value) {

            
                return index;
            }
            
            index++
            currentNode = currentNode.nextNode;
        }
        return null;
    }

}

const list = new LinkedList();
list.append("no1")
list.append("no2")
list.prepend("no.0")

const index = list.find("no2");
console.log(index);


// const check = list.contains("no1asdf");
// console.log(check);


// const popp =list.pop();
// console.log(popp)

// console.log(list);

// const i = list.at(2);
// console.log(i);


// console.log(list)

// const listSize = list.size();
// console.log(listSize);

// const head = list.getHead()
// console.log(head);

// const tail = list.getTail();
// console.log(tail);
