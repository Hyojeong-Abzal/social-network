let renderTree = (_state: RootStateType) => {
    console.log("State changed!")
}


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




export type storeType = {
    _state: RootStateType
    subscribe: (observer: (_state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
// for profile


type AddPostActionType = ReturnType<typeof AddPostAC >
type UpdatePostActionType = ReturnType<typeof UpdatePostAC >
export const AddPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const UpdatePostAC = (newText: string) => {
    return {
        type: "UPDATE-POST-TEXT",
        newText: newText
    } as const
}
// for messege 

type UpdateMessageActionType = ReturnType<typeof updateMessageAC>
type SendMessageActionType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = () => {
    return {
        type: "SEND-MESSEGE"
    } as const
}

export const updateMessageAC = (newMessage: string) => {
    return {
        type: "UPDATE-MESSEGE-TEXT",
        newMessage: newMessage
    } as const
}


export type ActionsTypes = AddPostActionType | UpdatePostActionType | SendMessageActionType | UpdateMessageActionType;

export const store: storeType = {
    _state : {
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
                {id: 1, message: "Love, awareness and full invetment !", like: 35},
                {id: 2, message: "What you are is God's gift to you, what you'll become is your gift to God.", like: 5535},
                {id: 3, message: "true love is never giving up!", like: 55}
    
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
    },
    subscribe (observer: (_state: RootStateType) => void) {
            renderTree = observer
        },
    getState () {
        return this._state
    },
    dispatch (action) {
        if ( action.type === "ADD-POST") {
            const newPost:PostDatatype = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = "";
            renderTree(this._state);
        } else if ( action.type === "UPDATE-POST-TEXT" ) {
            this._state.profilePage.newPostText = action.newText;
        renderTree(this._state);
        } 
            else if ( action.type === "SEND-MESSEGE") {
            
            const newMessage = {
                id: new Date().getTime(),
                avatar: 'https://sun9-54.userapi.com/impg/c858532/v858532894/109aab/QgbYlClVvxk.jpg?size=1280x1280&quality=96&sign=0ffeb8dec673187ed8b61505eecf0cf0&type=album',
                name: 'Abzal Suan',
                message: this._state.messagePage.newMessage,
                time: '10:25'
            };
                this._state.messagePage.messagesData.push(newMessage);
     
                this._state.messagePage.newMessage = "";
                renderTree(this._state);
        } else if ( action.type === "UPDATE-MESSEGE-TEXT") {
            this._state.messagePage.newMessage = action.newMessage;
            renderTree(this._state);
        }
    }
}

