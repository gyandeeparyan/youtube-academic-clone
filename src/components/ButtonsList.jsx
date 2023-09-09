import Button from "./Button";

const ButtonsList = () => {
  return (
    <>
      <div className='flex'>
        {/* MAP THIS OUT */}
        <Button name='All' />
        <Button name='Gaming' />
        <Button name='Songs' />
        <Button name='Live' />
        <Button name='Soccer' />
        <Button name='Cricket' />
        <Button name='Cooking' />
        <Button name='News' />
      </div>
    </>
  );
};

export default ButtonsList;
