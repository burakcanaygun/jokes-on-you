import axios from 'axios';
import Modal from '../components/Modal';
import React, { useCallback, useState } from 'react';
import Checkbox from '../components/Checkbox';


const Home = () => {
    const [selectedClass, setSelectedClass] = useState('any');
    const [query, setQuery] = useState(['Any']);
    const [blackList, setBlackList] = useState([]);
    const [jokes, setJokes] = useState([]);
    const [modal, setModal] = useState(false);
    const handleRadios = (e) => {
        e.target.parentElement.classList.contains('any') ? setSelectedClass('any') : setSelectedClass('custom');
        e.target.parentElement.classList.contains('any') ? setQuery(['Any']) : setQuery([]);
    }

    const handleName = (e) => {
        e.target.parentElement.classList.contains('any') ? setQuery(['Any']) :
            (e.target.checked ? setQuery(state => [...state, e.target.id]) :
                setQuery(state => state.filter(item => item !== e.target.id)));
    }

    const handleBlackList = (e) => {
        (e.target.checked ? setBlackList(state => [...state, e.target.id]) :
            setBlackList(state => state.filter(item => item !== e.target.id)));
    }

    const linkBuilder = () => {
        return (process.env.REACT_APP_API_URL + query + `${blackList.length === 0 ? '' : '?blacklistFlags=' + blackList.join(',')}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getJokes = async () => {
        const response = await axios.get(linkBuilder());
        setJokes(response.data);
    };

    const handleJokes = useCallback(() => {
        getJokes();
        setModal(!modal);
    }, [getJokes, modal]);

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div
                    className={"d-flex flex-column min-vh-100 justify-content-center align-items-center"}>
                    <div className={"display-2"}>Jokes On You</div>
                    <div className={"col-12 d-flex mt-5 text-center"}>


                        <div className={"col-6"}>
                            <h5>Categories</h5>


                            <div className={"any col-3 mx-auto text-start"}>
                                <input type="radio" className={"form-check-input"} name={"any"} id={"any"} checked={selectedClass === 'any' ? true : false} onChange={handleRadios} />
                                <label className={"form-check-label ms-2"} htmlFor={"any"}>Any</label>
                            </div>


                            <div className={"custom col-3 mx-auto text-start"}>
                                <input type="radio" className={"form-check-input"} name={"custom"} id={"custom"} checked={selectedClass === 'custom' ? true : false} onChange={handleRadios} />
                                <label className={"form-check-label ms-2"} htmlFor={"custom"}>Custom</label>
                                <div className={`custom-input-list text-start ${selectedClass === 'custom' ? '' : 'is-disabled'}`} onClick={handleName}>
                                    <Checkbox name={"Programming"} checkboxId={"Programming"} />
                                    <Checkbox name={"Miscellaneous"} checkboxId={"Miscellaneous"} />
                                    <Checkbox name={"Dark"} checkboxId={"Dark"} />
                                    <Checkbox name={"Pun"} checkboxId={"Pun"} />
                                    <Checkbox name={"Spooky"} checkboxId={"Spooky"} />
                                    <Checkbox name={"Christmas"} checkboxId={"Christmas"} />
                                </div>
                            </div>

                        </div>


                        <div className={"col-6"}>


                            <h5>Black Flags (Optional)</h5>
                            <div className={"black-list col-5 mx-auto text-start"} onClick={handleBlackList}>
                                <Checkbox name={"nsfw"} checkboxId={"nsfw"} />
                                <Checkbox name={"religious"} checkboxId={"religious"} />
                                <Checkbox name={"political"} checkboxId={"political"} />
                                <Checkbox name={"racist"} checkboxId={"racist"} />
                                <Checkbox name={"sexist"} checkboxId={"sexist"} />
                                <Checkbox name={"explicit"} checkboxId={"explicit"} />
                            </div>
                        </div>
                    </div>
                    <Modal show={modal} handleClose={handleJokes} jokes={jokes} />
                    <div className={"col-12 justify-content-center d-flex"}>
                        <button className={"btn btn-primary mt-5"} onClick={handleJokes}>Get Some Jokes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
