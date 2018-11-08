export default {

    SET_NAME: name => ({
        type: 'SET_NAME',
        payload: {
            name
        },
    }),

    SET_TO: to => ({
        type: 'SET_TO',
        payload: {
            to
        },
    }),

    SET_LOCAL_STREAM: localVideoStream => ({
        type: 'SET_LOCAL_STREAM',
        payload: {
            localVideoStream
        },
    }),

    SET_REMOTE_STREAM: remoteVideoStream => ({
        type: 'SET_REMOTE_STREAM',
        payload: {
            remoteVideoStream
        },
    }),

    SET_WS: wsConnection => ({
        type: 'SET_WS',
        payload: {
            wsConnection
        },
    }),

    SET_LIST: onlineUsersList => ({
        type: 'SET_LIST',
        payload: {
            onlineUsersList
        },
    }),

    SET_PEER: peerConnection => ({
        type: 'SET_PEER',
        payload: {
            peerConnection
        }
    }),

};