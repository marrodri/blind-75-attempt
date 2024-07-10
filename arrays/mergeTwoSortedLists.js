/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    /**
    variable declaration
     */
    var walker=null;
    var mergedList=null;
    var newNode = null;
    ///check if one of the lists is empty or a null pointer.
    if(!list1){
        return list2;
    }
    if(!list2){
        return list1;
    }

    ///iterate both lists, untill one list reaches a null pointer.
    while (list1 && list2){
        if (list1.val <= list2.val) {
            newNode = new ListNode(list1.val, null)
            list1 = list1.next;
        }
        else{
            newNode = new ListNode(list2.val, null)
            list2 = list2.next;
        }
        if (!mergedList) {
            mergedList = newNode;
            walker = newNode;
        }
        else{
            walker.next = newNode;
            walker = newNode;
        }        
    }
    ///append the remainder elements.
    if(!list1){
        walker.next = list2;
    }
    else if(!list2){
        walker.next = list1;
    }
    
    return mergedList;
};
