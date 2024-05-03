interface IUserInfo {
    name: string,
    value: string
}

interface IProjectInfo {
    name: string,
    description?: string,
    src: string,
    imgPreview: string,
    lib: string
}

export const USER_INFO:IUserInfo[] = [
    { name: 'Full name', value: 'Nguyen Tuan Anh'},
    { name: 'Date of birth', value: '27/12/1999'},
    { name: 'From', value: 'Phu Tho'},
    { name: 'Hobby', value: 'Travel, read books, play video games, ...'},
    { name: 'Expect', value: 'Ap dung nhung kinh nghiem ve ky nang ban hnag va suj hieu biet ve thi truong de tro thanh mot nhan vien ban hang chuyen nghiep, mang den nhieu gia tri cho khach hang'}
]

export const LIST_PROJECTS:IProjectInfo[] = [
    {
        name: 'Viettel Meeting',
        description: 'Online meeting',
        src: 'https://nextui.org/images/card-example-3.jpeg',
        imgPreview: 'https://nextui.org/images/card-example-3.jpeg',
        lib: 'Reactjs'
    },
    {
        name: 'Auth Meeting',
        description: 'Manage',
        src: 'https://nextui.org/images/card-example-3.jpeg',
        imgPreview: 'https://nextui.org/images/card-example-3.jpeg',
        lib: 'Reactjs | Mui'
    },
    {
        name: 'Viettel Meet',
        description: 'Landing page',
        src: 'https://nextui.org/images/card-example-3.jpeg',
        imgPreview: 'https://nextui.org/images/card-example-3.jpeg',
        lib: 'Reactjs | Tailwind CSS'
    }
]