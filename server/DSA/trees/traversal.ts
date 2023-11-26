export const traversal = {
    levelorder( node ){
        const arr = [];
        let level = [node];
        while(level.length){
            const newlevel = [];
            level.forEach((e,i)=>{ 
                if(e){
                    newlevel.push(e.left), newlevel.push(e.right)
                    arr.push(e.value)
                }
                else {
                    arr.push(e)
                }
            })
            level = newlevel;
        }
        return arr;
    },

    inorder( node ){
        const arr = [];

        function trav(node){
            if(!node) return arr.push(null);
            trav(node.left);
            arr.push(node.value);
            trav(node.right);
        }

        trav(node)

        return arr;
        
    }
}
