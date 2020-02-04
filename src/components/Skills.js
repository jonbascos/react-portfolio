import React from 'react'

import frontend from './skills/frontend.js'
import backend from './skills/backend.js'
import languages from './skills/languages.js'
import tools from './skills/tools.js'

function Skills() {
    const frontendList = frontend.map(item => {
        return(
            <li>
                <p>{item.skill}</p>
            </li>
        )
    })

    const backendList = backend.map(item => {
        return(
            <li>
                <p>{item.skill}</p>
            </li>
        )
    })

    const languagesList = languages.map(item => {
        return(
            <li>
                <p>{item.skill}</p>
            </li>
        )
    })

    const toolsList = tools.map(item => {
        return(
            <li>
                <p>{item.skill}</p>
            </li>
        )
    })
    return(
        <div>
            <h1 className='headings'>Skills</h1>
                <div className='skills-container'>
                    <ul className='skills-card'>
                    <h2 className='headings'>Languages</h2>
                        {languagesList}
                    </ul>
                    <hr />
                    <ul className='skills-card'>
                    <h2 className='headings'>Front End</h2>
                        {frontendList}
                    </ul>
                    <hr />
                    <ul className='skills-card'>
                    <h2 className='headings'>Back End</h2>
                        {backendList}
                    </ul>
                    <ul className='skills-card'>
                    <h2 className='headings'>Tools</h2>
                        {toolsList}
                    </ul>
                </div>
        </div>
    )
}

export default Skills