
/**
 * `const start = {}`
 * `start.hello = 32`
 * `start.world = start.hello`
 * `delete start.hello;`
 * `gc()`
 * `delete start.world;`
 * `gc()`
 */

//---------------------


let heap = []

heap[0] = { name: 'global' }


//---------------------


/**
 * `const start = {}`
 */ 
heap[1] = {
  parent: 0,
  name: 'start',
}


/**
 * `start.hello = 32`
 */ 
heap[2] = {
  parent: 1,
  name: 'hello',
  value: 32,
}


/**
 * `start.world = start.hello`
 */ 
heap[3] = {
  parent: 1,
  name: 'world',
  pointsTo: 2,
}
heap[2].pointerCount = 1;


//---------------------

console.log(heap)

//---------------------


/**
 * `delete start.hello;`
 */ 
heap[2].parent = null


//---------------------

console.log(heap)

//---------------------


function isConnected(item) {
  if (item.parent === null) {
    return false
  }

  if (!item.parent) {
    return true
  }

  return isConnected(item.parent)
}

function gc() {
  // mark
  heap.map((item) => {
    if (!isConnected(item) && !item.pointerCount) {
      item.isMarkedForDeletion = true;
    }
  })

  // sweep
  heap = heap.filter(item => !item.isMarkedForDeletion);
}


// //---------------------

gc();
console.log(heap)

// //---------------------


/**
 * `delete start.world;`
 */ 
heap[3].parent = null;
heap[2].pointerCount--;


gc();
console.log(heap)
