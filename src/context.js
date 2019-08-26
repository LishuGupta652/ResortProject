import React, { Component } from 'react'
// import items from "./data";
import Client from "./Contentful"

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms:[],
        featuredRooms: [],
        loading: true
    }    
    // get data
    getData = async () => {
        try {
            let response = await Client.getEntries({
                                skip:0,
                                content_type:"payingGuestRoom"
                            });

            let rooms = this.formatData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);
            
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms : rooms, 
                loading: false
            })
        } catch (error) {
            console.log(error);
            
        }
    }
    componentDidMount(){
        this.getData(); 

    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id =  item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = {...item.fields, images, id}
            return room;
        })
        return tempItems;
    }
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.slug === slug);

        return room;
    }


    render() {
        return (
            <RoomContext.Provider 
                value={{
                    ...this.state, 
                    getRoom : this.getRoom
                }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};