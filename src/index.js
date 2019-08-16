import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import List from './components/ListOfUsers/List';
// import SearchPanel from './components/SearchPanel';
// import Text from './components/Text';
// import Title from './components/Header/Header';
// import Btn from './components/Btn';
// import Btn_tutor from './components/Btn_tutor';
// import Logo from './components/Logo';
// import FooterNav from './components/FooterNav';

const App = () => {

    const ListOfContacts = [
        {
            name: 'Camila Terry',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                '                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            img: "https://randomuser.me/api/portraits/women/50.jpg"
        },
        {
            name: 'Joel Williamson',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                '                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            img: "https://randomuser.me/api/portraits/men/42.jpg",
            contacts: {
                mobile: [ "+38-096-734-12-987", "+38-096-734-12-287"],
                tel: "123-123-122"
            }
        },
        {
            name: 'Deann Payne',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                '                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            img: "https://randomuser.me/api/portraits/women/67.jpg"
        },
        {
            name: 'Leona Hunter',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                '                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            img: "https://randomuser.me/api/portraits/men/89.jpg"
        },
        {
            name: 'Donald Perkins',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                '                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
            img: "https://randomuser.me/api/portraits/men/77.jpg"
        }
    ];

    return (
        <section className="row-section">
            <div className="container">
                <Header/>
                <List contacts={ListOfContacts}/>
            </div>
        </section>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
