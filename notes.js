const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Please add a note with a different title!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length === 0) {
        console.log(chalk.red.bold.inverse('You have no notes!'))
    } else {
        console.log(chalk.blue.inverse('Your notes...'))
        console.log(chalk.bold('------------------'))
        notes.forEach(note => {
            console.log(chalk.green(note.title))
        })
    }
}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.bold(('------------------')))
        console.log(chalk`{bold Title: } ${note.title}`)
        console.log(chalk`{bold Body: } ${note.body}`)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notestoKeep = notes.filter(note => note.title !== title)

    if (notes.length > notestoKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notestoKeep)
    } else {
        console.log(chalk.red.inverse('No note removed!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}