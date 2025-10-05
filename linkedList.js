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
}

const list = new LinkedList();


