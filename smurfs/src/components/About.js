import React from 'react'

const list ={
    color : 'black',
    fontSize: '1.5rem',
    pstStyleType: 'none'
    
}

const About = () => {
    return (
        <div>
            <p>Here are some fun facts about the Smurfs</p>
            <div style={list}>
                <p>The word “Smurf” is the original Dutch translation of the French “Schtroumpf”, which is a word invented by Belgian artist Peyo during a meal with fellow cartoonist André Franquin, when he could not remember the word salt.</p>
                <p></p>
                <p>The Smurfs wear Phrygian caps, which came to represent freedom during the modern era.</p>
                <p></p>
                <p>Smurfs love to eat sarsaparilla (a species of Smilax) leaves, with berries the Smurfs naturally call “smurfberries”</p>
                <p></p>
                <p>Around 1984, the Smurfs began appearing in North American theme parks owned by Kings Entertainment Corporation. Each park featured a Smurf attraction and Smurf walk-around figures.</p>
                <p></p>
                <p>Smurfs are known to turn purple when they get mad based on an episode where a Smurf decided to hold his breath.</p>
            </div>
        </div>
    )
}

export default About