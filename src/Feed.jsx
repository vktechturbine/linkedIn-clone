import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './Firebase';
import FlipMove from 'react-flip-move';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDocs, collection, addDoc, FieldValue, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Feed() {
    const [input, setInput] = useState('');
    const [post, setPost] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
    
            const fireStoreData = query(collection(db, 'posts'), orderBy('timeStamp', 'desc'));

            const realTimeData = onSnapshot(fireStoreData, (snapshot) => {
                setPost(snapshot.docs.map((doc, index) => (
                    { id: snapshot.docs[index].id, data: doc._document.data.value.mapValue.fields }
                )))
            })
            


    }, [])


    const sendPost = e => {
        e.preventDefault();
        addDoc(collection(db, "posts"), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timeStamp: serverTimestamp(),
        })
    }
    return (
        <div className="feed">
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type='text' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>
            <FlipMove>

                {post.map(({ data: { name, description, message, photoUrl, timeStamp }, id }) => (
                    <Post
                        key={id}
                        name={name.stringValue}
                        description={description.stringValue}
                        message={message.stringValue}
                        photoUrl={photoUrl.stringValue}
                    />
                ))}
            </FlipMove>
        </div>
    );
}

export default Feed;
