import React from "react";

function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return (props: T & { isLoading: boolean }) => {
    const { isLoading, ...rest } = props;
    return isLoading ? <p>Loading...</p> : <Component {...(rest as T)} />;
  };
}

type UserProps = {
  name: string;
};

const UserComponen: React.FC<UserProps> = ({ name }) => {
  return <p>Hello, {name}!</p>;
};

const UserWithLoading = withLoading(UserComponen);

export const ParentComponent = () => {
  return (
    <div>
      <UserWithLoading isLoading={false} name="Pepe" />
      <UserWithLoading isLoading={true} name="Arturo" />
    </div>
  );
};
