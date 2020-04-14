import React from 'react'
import Greeting from './content/Greeting'
import ToDoList from './content/ToDoList'
import ContactList from './content/ContactList'
import ProductList from './content/productList/ProductList'
import Clicker from './content/clicker/Clicker'

function MainContent() {
    return (
        <main className="content">
            <Greeting />
            <p>Learning React...</p>
            <Clicker />
            <ToDoList />
            <ContactList />
            <ProductList />
        </main>
    )
}

export default MainContent