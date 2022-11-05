import Mock from '../mock'
import shortId from 'shortid'

const NotificationDB = {
    list: [
        {
            id: shortId.generate(),
            heading: 'Success',
            icon: {
                name: 'notifications',
                color: 'success',
            },
            timestamp: 1667502802573,
            title: 'Successful transaction',
            subtitle: '100$ sent to David',
            path: 'chat',
        },
        {
            id: shortId.generate(),
            heading: 'Alert',
            icon: {
                name: 'notifications',
                color: 'error',
            },
            timestamp: 1667302802573,
            title: 'DYM smart interest',
            subtitle: '+100',
            path: 'page-layouts/user-profile',
        },
        {
            id: shortId.generate(),
            heading: 'Swapped',
            icon: {
                name: 'cached',
                color: 'primary',
            },
            timestamp: 1667102802573,
            title: 'Successful swapped',
            subtitle: '100$ swapped to 340 DYM',
            path: 'chat',
        },
    ],
}

Mock.onGet('/api/notification').reply((config) => {
    const response = NotificationDB.list
    return [200, response]
})

Mock.onPost('/api/notification/add').reply((config) => {
    const response = NotificationDB.list
    return [200, response]
})

Mock.onPost('/api/notification/delete').reply((config) => {
    let { id } = JSON.parse(config.data)
    console.log(config.data)

    const response = NotificationDB.list.filter(
        (notification) => notification.id !== id
    )
    NotificationDB.list = [...response]
    return [200, response]
})

Mock.onPost('/api/notification/delete-all').reply((config) => {
    NotificationDB.list = []
    const response = NotificationDB.list
    return [200, response]
})
