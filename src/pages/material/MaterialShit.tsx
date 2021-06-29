import {useEffect, useState} from "react";
import {getUsers} from "../../services/api";
import {User} from "../../interfaces/user";
import {CollapsibleTable} from "../../components/Table";

export const MaterialShit = () => {
    const [users, setUsers] = useState<User[]>([])
    const url=''
    useEffect(() => {
        (async function () {
            const usersData = await getUsers(url)
            setUsers(usersData)
        })()
    }, [])
    return (
        <div>
            {!users || !users.length ? <div>wait....</div> :
                <div>
                    <h1>users</h1>
                    <CollapsibleTable users={users}/>
                </div>
            }
        </div>);
};

