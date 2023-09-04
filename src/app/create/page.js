'use client';

import { useRouter } from "next/navigation";

export default function Create() {
    const router = useRouter();
    return (
        <form onSubmit={async e=>{
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            const resp = await fetch('http://localhost:9999/topics', {
                method  : 'POST',
                body    : JSON.stringify({title, body}),
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
            const topic = await resp.json();
            // 사용자를 /read/+id로 이동시킨다.
            const lastId = topic.id;
            const url = `/read/${lastId}`;
            router.push(url);
            router.refresh();
        }}>
            <h2>Create</h2>
            <p><input type="text" name="title" placeholder="title"/></p>
            <p><textarea name="body" placeholder="body"/></p>
            <p><input type="submit" value="create" /></p>
        </form>
    )
}