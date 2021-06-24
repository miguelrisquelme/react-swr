import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { mutate as mutateGlobal } from "swr";

import { useFetch } from "../hooks/useFetch";
import api from "../services/api";

interface User {
	id: number;
	name: string;
}

const UserList: React.FC = () => {
	const { data, mutate } = useFetch<User[]>("/users");

	const handleNameChange = useCallback(
		(id: number) => {
			api.put(`/users/${id}`, { name: "Novo nome" });

			const updatedUsers = data?.map((user) => {
				if (user.id === id) return { ...user, name: "Bartolomeu" };
				return user;
			});

			mutate(updatedUsers, false);
			mutateGlobal(`/users/${id}`, { id, name: "Bartolomeu" });
		},
		[data, mutate]
	);

	if (!data) return <p>Carregando...</p>;

	return (
		<ul>
			{data?.map((user) => (
				<li key={user.id}>
					<Link to={`/users/${user.id}`}>{user.name}</Link>
					<button type="button" onClick={() => handleNameChange}>
						Alterar nome
					</button>
				</li>
			))}
		</ul>
	);
};

export default UserList;
