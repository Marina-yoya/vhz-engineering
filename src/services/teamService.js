

export const createTeam = async(data, token) =>{
    let response = await fetch(`http://localhost:3030/data/teams`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(data)
    });
    

    let result = await response.json();

    return result;
}

export const getUserTeam = async(userId) => {
    
    const response = await fetch(`http://localhost:3030/data/teams?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    const data = await response.json();
    console.log(data)
    return data;
}


export async function getOneMember(id) {
    const url = `http://localhost:3030/data/teams/` + id
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function changeMember(id, token, data) {
    const response = await fetch('http://localhost:3030/data/teams/' + id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json',
                    'X-Authorization': token,},
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result)
    return result;

}

export async function delMember(id, token) {

    const response = await fetch(`http://localhost:3030/data/teams/${id}` , {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    });
    console.log(response);
    const result = await response.json();
console.log(result)

    return result;

}