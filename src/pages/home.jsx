import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweet from '../components/Tweet';

function Home() {
    return (
        <main className="timeline">
            <Header/>
            <TweetEditor/>
            <Tweet/>
        </main>

    );
}

export default Home;