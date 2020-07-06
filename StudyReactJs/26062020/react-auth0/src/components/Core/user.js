import { request } from '../../components/Core/request'
import _ from 'lodash'

const history = createBrowserHistory()
let dataToken = {}
function load() {
    var infoUser = localStorage.getItem('infoUser')
    if (infoUser != null) {
        dataToken = JSON.parse(t)
    } else {
        dataToken = {}
    }
}
load()
function setData(_data) {
    dataToken = Object.assign(dataToken, _data)
    localStorage.setItem('infoUser', Json.stringify(_data))
}
export const createUser = async (data) => {
    try {
        let dataUser = await request.post('user/createUser', data)
        return dataUser
    } catch (err) {
        console.log('err listUser', err)
    }
}
export const login = user => {
    return request.post('api/user/login', {
        email: user.email,
        password: user.password
    }).then(res => {
        if (res && res.err !== 404) {
            localStorage.clear()
            sessionStorage.clear()
            let dataInfo = {
                token: res.token,
                user: res.userInfo
            }
            setData(dataInfo)
        }
        return res
    }).catch(err => {
        console.log(err)
        return err
    })
}
export const checkLogin = () => {
    if (_.isEmpty(dataToken)) {
        history.push("/login")
    } else {
        return true
    }
}
export const getToken = (key) => {
    if (checkLogin()) {
        return `Bearer ${dataToken.token.token}`;
    } else

        return null

}
export const getInfoUser = () => {
    if (checkLogin()) {
        return dataToken.user
    } else
        return null
}
