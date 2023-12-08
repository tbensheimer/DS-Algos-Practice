class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.map = new Map();
        this.list = new DoubleLinkedList();
    }

    get(key) {
        if(!this.map[key]) return  -1;

        let node = this.map[key];
        this.list.moveToFront(node);
        return node.value;
    }

    put(key, val) {
        if(this.map[key]) {
            let node = this.map[key];
            node.value = val;
            this.list.moveToFront(node);
            this.map[key] = node;
            return;
        }

        if(this.size == this.capacity) {
            let last = this.list.removeLast();
            delete this.map(last.key);
            this.size--;
        }

        let newNode = new ListNode(key, val);
        this.list.add(newNode);
        this.map[key] = newNode;
        this.size++;
    }
}

class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = new ListNode();
        this.tail = new ListNode();
        this.connect(this.head, this.tail);
    }

    connect(node1, node2) {
        node1.next = node2;
        node2.prev = node1;
    }

    add(node) {
        this.connect(node, this.head.next);
        this.connect(this.head, node);
    }

    delete(node) {
        this.connect(node.prev, node.next);
    }

    removeLast() {
        let last = this.tail.prev;
        this.delete(last);
        return last;
    }

    moveToFront(node) {
        this.delete(node);
        this.add(node);
    }
}