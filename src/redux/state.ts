import {renderTree} from "../render";



export type ProfileInfoDataType = {
    id: number
    name: string
    age: number
    isMarried: string  | boolean
    born: string
    live: string
    status: string

}

export type MusicDatatype = {
    id: number
    text: string
    author: string
}
export type PostDatatype = {
    id: number
    message: string
    like: number
}
export type DialogsDateType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id: number
    avatar: string
    name: string
    message: string
    time: string
}
export type MusicsPageType = {

    musicData: MusicDatatype[]
}
export type ProfilePageType = {
    postData: PostDatatype[]
    profileInfoData: ProfileInfoDataType[]
    newPostText: string

}
export type DialogsPageType = {
    dialogsData: DialogsDateType[]
}

export type MessagePageType = {
    newMessage: string
    messagesData: MessagesDataType[]
}
export type RootStateType = {

    profilePage: ProfilePageType
    musicsPage: MusicsPageType
    dialogsPage: DialogsPageType
    messagePage: MessagePageType
}
let state: RootStateType = {
    profilePage: {
        profileInfoData: [
            {
                id: 1,
                name: "Abzal Suan",
                age: 21,
                isMarried: " with Trisha Navarro",
                born: "Almaty, Kazakhstan",
                live: "Moscow, Russia",
                status: " from KZ 🍏 Healthy Life-style ⚡ Volunteer 🎯 student in Moscow"
            }
        ],
        postData: [
            {id: 1, message: "Hi brother!", like: 35},
            {id: 2, message: "it's an amazing chance for me to contact you!", like: 5535},
            {id: 3, message: "Thank you for your hard work!", like: 55}

        ],
        newPostText: ""
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Tony Stark'},
            {id: 2, name: 'Tony Robbins'},
            {id: 3, name: 'Akzhol Ardakbek'},
            {id: 4, name: 'Abkeev Arlan'},
            {id: 5, name: 'Evgeny Mirzyanov'},
        ]

    },
    musicsPage: {
        musicData: [
            {id: 1, text: 'Nothing else matters', author: ' Metalica '},
            {id: 2, text: 'Everything', author: 'Micheal Buble'},
            {id: 3, text: 'Saragh-he', author: 'Hyo Jin Moon'}
        ]
    },
    messagePage: {
        newMessage: "",
        messagesData: [
            {
                id: 1,
                avatar: 'https://i.pinimg.com/originals/45/18/b3/4518b37946cc3bb9b5a1e56cde2f2e73.jpg',
                name: 'Tony Stark',
                message: 'Hey! Did you already applay for job in my company?',
                time: '10:00',
            }, {
                id: 2,
                avatar: 'https://i.pinimg.com/originals/45/18/b3/4518b37946cc3bb9b5a1e56cde2f2e73.jpg',
                name: 'Tony Stark',
                message: 'I just created a new language of programming',
                time: '10:05',
            },
            {
                id: 3,
                avatar: 'https://i.pinimg.com/originals/45/18/b3/4518b37946cc3bb9b5a1e56cde2f2e73.jpg',
                name: 'Tony Stark',
                message: 'Could you look at it?',
                time: '10:20',
            }
        ]
    }
}

export const  addPost = () =>  {
    const newPost:PostDatatype = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        like: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = "";
    renderTree(state);
}

export const sendMessage = () => {

    const newMessage = {
        id: new Date().getTime(),
        avatar: 'https://sun9-54.userapi.com/impg/c858532/v858532894/109aab/QgbYlClVvxk.jpg?size=1280x1280&quality=96&sign=0ffeb8dec673187ed8b61505eecf0cf0&type=album',
        name: 'Abzal Suan',
        message: state.messagePage.newMessage,
        time: '10:25'
    };
    state.messagePage.messagesData.push(newMessage);
    renderTree(state);
    state.messagePage.newMessage = "";
}

export const updatePostText = (newText: string ) => {
    state.profilePage.newPostText = newText;
    renderTree(state);
}
export const updateMessageText = (newMessage: string ) => {
    state.messagePage.newMessage = newMessage;
    renderTree(state);
}

export default state;
