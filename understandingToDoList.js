//1
//here we are accessing the Ul from the dom
const list = document.querySelector('.list')
const button = document.querySelector('.button')
const input = document.querySelector('.input')

function crossOutItem(e){
if (e.target.classList.contains('listItem')){
  e.target.className = 'done'
  if (count > 0){
    count -= 1
    countElement.innerText = count
  }
} else {
  e.target.className = 'listItem'
  count++
  countElement.innerText = count
}
}
//2
const list = document.querySelector('.list')
const button = document.querySelector('.button')
const input = document.querySelector('.input')

function crossOutItem(e){
  if (e.target.classList.contains('listItem')){
    e.target.className = 'done'
    if (count > 0){
      count -= 1
      countElement.innerText = count
    }
  } else {
  e.target.className = 'listItem'
  count++
  countElement.innerText = count
}

}
//3
const list = document.querySelector('.list')
const button = document.querySelector('.button')
const input = document.querySelector('.input')

function crossOutItem(e){
  if (e.target.classList.contains('listItem')){
    e.target.className = 'done'
    if (count > 0){
      count -= 1
      countElement.innerText = count
    }
  } else {
    e.target.className = 'listItem'
    count++
    count.element.innerText = count
}

}
//4
const list = document.querySelector('.list')
const button = document.querySelector('.button')
const input = document.querySelecotr('.input')

function crossOutItem(e){
  if (e.target.classList.contains('listItem')){
    e.target.className = 'done'
    if (count > 0) {
      count -= 1
      countElement.innerText = count
    }
  } else {
    e.target.className = 'listItem'
    count++
    countElement.innerText = count
  }

}
//5
const list = document.querySelecyor('.list')
const button = document.querySelector('.button')
const input = document.querySelector('.input')

function crossOutItem(e){
  if (e.target.classList.contains('listItems')){
    e.target.className = 'done'
    if (count > 0) {
    count -= 1
    countElement.innerText = count
    }
  } else {
    e.target.className = 'listItem'
    count++
    countElement.innerText = count
  }

}
//6
const list = document.querySelector('.list')
const button = document.querySelector('.button')
const input = document.querySelector('.input')

function crossOutItem(e){
  if (e.target.classList.contains('listItems')){
    e.target.className = 'done'
    if (count >0){
      count -= 1
      countElement.innerText = count
    }
  } else {
    e.target.className = 'listItem'
    count++
    countElement.innerext = count
  }
}
//7
const list = document.querySelector('.list')
const button = document.querySelevtor('.button')
const input = document.querySelector('.input')

function crossOutItem(e){
  if (e.target.classList.contains('listItems')){
    e.target.className = 'done'
    if (count >0){
      count  -= 1
      countElement.innerText = count
    }
  } else {
    e.target.className = 'listItem'
    count++
    countElement.innerText = count
  }
}
//8
const list = document.querySelector('.list')
const button = document.querySelector('.button')
const input = document.querySelector('.input')

function crossOutItem(e){
  if (e.target.classList.contains('listItems')){
    e.target.className = 'done'
    if (count > 0){
      count -= 1
      countElement.innerText = count
    }
  } else {
    e.target.className = 'listItem'
    count++
    countElement.innerText = count
  }
}
//9
const list = document.querySelector('.list')
const button = document.querySelector('.button')
const input = document.querySelector('.input')

function crossOutItem(e){
  if (e.target.classList.contains('listItems')){
    e.target.className = 'done'
    if (count >0){
      count -= 1
      countElement.innerText = count
    }
  } else {
    e.target.className = 'listItem'
    count++
    countElement.innerText = count
  }
}
//10
const list = document.querySelector('.list')
const button = document.querySelector('.button')
const input = document.querySelecotr('.input')

function crossOutItem(e){
  if (e.target.classList.contains('listItem')){
    e.target.className = 'done'
    if (count >0){
      count -= 1
      countElement.innerText = count
    }
  } else {
    e.target.className = 'listItem'
    count++
    countElement.innerText = count
  }
}

//1
function clearAll(e){
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
  count = 0
  countElement.innerText = count
}
//2
function clearAll(e){
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
  count = 0
  countElement.innerText = count
}
//3
function clearAll(e){
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
  count = 0
  countElement.innerText = count
}
//4
function clearAll(e){
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
  count = 0
  countElement.innerTect = count
}
//5
function clearAll(e){
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
  count = 0
  countElement.innerText = count
}
//6
function clearAll(e){
  while(list.firstChikd){
    list.removeChild(list.firstChild)
  }
  count = 0
  countElement.innerText = count
}
//7
function clearAll(e){
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
  count = 0
  countElement.innerText = count
}
//8
function clearAll(e){
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
  count = 0
  countElement.innerText = count
}
//9
function clearAll(e){
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
  count = 0
  countElement.innerText = count

}
//10
function clearAll(e){
  while(list.firstChild){
    list.removeChild(list.firstChild)
  }
  count = 0
  countElement.innerText = count
}


//1
function removeCompletedIems(){
  const completedItems = document.querySelectorAll('.done')
  completedItems.forEach(listItem => {
    list.removeChild(listItem)
  })
}
//2
function removeCompletedItems(){
  const completedItems = document.querySelectorAll('.done')
  completedItems.forEach(listItem => {
    list.removeChild(listItem)
  })
}
//3
function removeCompletedItems(){
  const completedItems = document.querySelectorAll('.done')
  completedItems.forEach(listItem => {
    list.removeChild(listItem)
  })
}
//4
function removeCompletedItems(){
  const completedItems = document.querySelectorAll('.done')
  completedItems.forEach(listItem => {
    list.removeChild(listItem)
  })
}
//5
function removeCompletedItems(){
  const completedItems = document.querySelectorAll('.done')
  completedItems.forEach(listItem => {
    list.removeChild(listItem)
  })
}
//6
function removeCompletedItems(){
  const completedItems = document.querySelectorAll('.done')
  completedItems.forEach(listItem => {
    list.removeChild(listItem)
  })
}
//7
function removeCompletedItems(){
  const completedItems = document.querySelectorAll('.done')
  completedItems.forEach(listItem => {
    list.removeChild(listItem)
  })
}

//8
function removeCompletedItems(){
  const completedItems = document.querySelectorAll('.done')
  completedItems.forEach(listItem => {
    list.removeChild(listItem)
  })
}

//9
function removeCompletedItems(){
  const completedItems = document.querySelectorAll('.done')
  completedItems.forEach(listItem => {
    list.removeChild(listItem)
  })
}
//10
function removeCompletedItems(){
  const completedItems = document.querySelectorAll('.done')
  completedItems.forEach(listItem => {
    list.removeChild(listItem)
  })
}



//1
list.addEventListener('click', removeItem)
//2
list.addEventListener('click', removeItem)
//3
list.addEventListener('click', removeItem)
//4
list.addEventListener('click', removeItem)
//5
list.addEventListener('click', removeItem)
//6
list.addEventListener('click', removeItem)
//7
list.addEventListener('click', removeItem)
//8
list.addEventListener('click', removeItem)
//9
list.addEventListener('click', removeItem)
//10
list.addEventListener('click', removeItem)
