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

toString() {
    if (this.head === null) {
        return console.log("The list is empty!!");
    }

    let currentNode = this.head;
    let result = "";

    while (currentNode !== null) {
        result += `(${currentNode.value.toString()}) -> `;
        currentNode = currentNode.nextNode;
    }

    result += "null";
    console.log(result);
}

//extra credit

    insertAt(value, index) {

          const cnt = this.size();

         //check if it is smaller than 0 or greater then the list
        
        if(index < 0 || index > cnt) {

            console.log("don't be silly");
            return;
        }


        const newNode = new Node(value);

                if(this.head === null) {

            if(index === 0) {
                
                this.head = newNode;
                this.tail = newNode;
            }
            else {
                 console.log("the index is out of bounds : the list is empty")
                 return;
            }
        }


        //if index is 0

        if(index === 0) {
            newNode.nextNode = this.head;
            this.head = newNode;
            return;
        }

        //check if the index is equal to the size of the list then we append at the end

      
        if(index === cnt) {
            this.tail.nextNode = newNode
            this.tail = newNode;
            return;
        }

  
        let count = 1;
        let currentNode = this.head;

        while(count < index) {

            currentNode = currentNode.nextNode;
            count++;
        }
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;

    }

    removeAt(index) {


        const size = this.size();
        console.log(size);
        //if the list is empty
        if(this.head === null) {

            console.log("Nothing to remove");
            return;
        }

        //if the index is removing the head

        if(index === 0) {

            if(this.size() === 1) {

                this.head = null;
                this.tail = null;
                return;
            }
            else {
                this.head = this.head.nextNode
                return;
            }
        }

     

        let count = 0;
        let currentNode = this.head;

           //if index is the tail


        if (index === size - 2){

            while(count < index) {
                currentNode = currentNode.nextNode;
                count++;
            }

            this.tail = currentNode;
            currentNode.nextNode = null;
            return
        }

        // if the index is smaller than 0 or bigger than the linked list

        if(index < 0 || index > size - 1){

            console.log("Nah not happening");
            return;
        }

        while(count < index - 1) {
            
            currentNode = currentNode.nextNode;
            count++
        }
        currentNode.nextNode = currentNode.nextNode.nextNode;

    }


}

const list = new LinkedList();
list.append("B")
list.append("C")
list.prepend("A")
list.append("D")
list.append("E");

list.insertAt("doggy", 4);
list.toString();

list.removeAt(6);
list.toString();

// list.toString();

// const index = list.find("no2");
// console.log(index);


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
