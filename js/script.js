let $ = document
let autoCompleteWrapper = $.querySelector('.search-input')
let searchInputElem = $.querySelector('input')
let autoCompleteBox = $.querySelector('.autocom-box')

searchInputElem.addEventListener('keyup', function () {
    let searchValue = searchInputElem.value

    if (searchValue) {
        autoCompleteWrapper.classList.add('active')

        let filteredWords = suggestions.filter(function (word) {
            return word.toLowerCase().includes(searchValue.toLowerCase()) //instead of include you can startswith...
        })

        suggestionWordsGeneratoer(filteredWords)

    } else {
        autoCompleteWrapper.classList.remove('active')
    }

})

function suggestionWordsGeneratoer(wordsArry) {
    let listItemArray = wordsArry.map(function (word) {
        return '<li>' + word + '</li>'
    })

    if (!listItemArray.length) {
        customListItem = '<li>' + searchInputElem.value + '</li>'
    } else {
        customListItem = listItemArray.join('') 
    }

    autoCompleteBox.innerHTML = customListItem
    select()

}

function select() {
    let allListItem = autoCompleteBox.querySelectorAll('li')
    allListItem.forEach(function (wordItem) {
        wordItem.addEventListener('click', function (event) {
            searchInputElem.value = event.target.textContent
        })
    })
    
}