import { IPrompt } from "@/types/prompt.types";

interface FavoritePrompts {
  userId: string;
  favoritePrompts: IPrompt[];
}

const getNewUsersAndUserFinded = (userId: string) => {
  const users: FavoritePrompts[] = JSON.parse(
    localStorage.getItem("favoritePrompts") || "[]"
  );
  const newUsers = users.filter((user) => user.userId !== userId);
  const userFinded = users.find((user) => user.userId === userId);

  return {
    newUsers,
    userFinded,
  };
};

function addPromptToLocalStorage(prompt: IPrompt, userId: string) {
  const { newUsers, userFinded } = getNewUsersAndUserFinded(userId);

  let newUser = {};

  if (!!userFinded) {
    newUser = {
      ...userFinded,
      favoritePrompts: [...userFinded.favoritePrompts, prompt],
    };
  } else {
    newUser = {
      userId,
      favoritePrompts: [prompt],
    };
  }

  localStorage.setItem(
    "favoritePrompts",
    JSON.stringify([...newUsers, newUser])
  );
}

function removePromptToLocalStorage(promptId: string, userId: string) {
  const { newUsers, userFinded } = getNewUsersAndUserFinded(userId);
  if (userFinded) {
    const favoritePromptsDeleted = userFinded?.favoritePrompts.filter(
      (promptMap) => promptMap._id !== promptId
    );

    if (userFinded) userFinded.favoritePrompts = favoritePromptsDeleted || [];

    localStorage.setItem(
      "favoritePrompts",
      JSON.stringify([...newUsers, userFinded])
    );
  }
}

function getLikedPrompts(userId: string): IPrompt[] {
  return (
    JSON.parse(localStorage.getItem("favoritePrompts") || "[]").find(
      (user: FavoritePrompts) => user.userId === userId
    )?.favoritePrompts || []
  );
}

export { addPromptToLocalStorage, getLikedPrompts, removePromptToLocalStorage };
