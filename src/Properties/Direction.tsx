const Direction = () => {
  return (
    <div className="flex flex-col justify-center gap-1 items-center bg-direction rounded-md w-[52px] h-[52px]">
      <div className="self-center h-auto">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18C7.75909 18 6.58977 17.7648 5.49205 17.2943C4.39432 16.8239 3.43977 16.183 2.62841 15.3716C1.81705 14.5602 1.17614 13.6057 0.705682 12.508C0.235227 11.4102 0 10.2409 0 9C0 7.74545 0.235227 6.57273 0.705682 5.48182C1.17614 4.39091 1.81705 3.43977 2.62841 2.62841C3.43977 1.81705 4.39432 1.17614 5.49205 0.705682C6.58977 0.235227 7.75909 0 9 0C10.2545 0 11.4273 0.235227 12.5182 0.705682C13.6091 1.17614 14.5602 1.81705 15.3716 2.62841C16.183 3.43977 16.8239 4.39091 17.2943 5.48182C17.7648 6.57273 18 7.74545 18 9C18 10.2409 17.7648 11.4102 17.2943 12.508C16.8239 13.6057 16.183 14.5602 15.3716 15.3716C14.5602 16.183 13.6091 16.8239 12.5182 17.2943C11.4273 17.7648 10.2545 18 9 18ZM8.48864 15.3614C8.625 15.4977 8.78182 15.5659 8.95909 15.5659C9.13636 15.5659 9.29318 15.4977 9.42955 15.3614L15.3205 9.47045C15.4568 9.33409 15.525 9.17045 15.525 8.97955C15.525 8.78864 15.4568 8.625 15.3205 8.48864L9.42955 2.59773C9.29318 2.46136 9.13636 2.39318 8.95909 2.39318C8.78182 2.39318 8.625 2.46136 8.48864 2.59773L2.59773 8.48864C2.46136 8.625 2.39318 8.78864 2.39318 8.97955C2.39318 9.17045 2.46136 9.33409 2.59773 9.47045L8.48864 15.3614ZM5.70682 11.4341V8.16136C5.70682 7.91591 5.78182 7.71818 5.93182 7.56818C6.08182 7.41818 6.27955 7.34318 6.525 7.34318H9.92045L9.06136 6.44318L10.2068 5.29773L13.0705 8.16136L10.2068 11.025L9.06136 9.87955L9.92045 8.97955H7.34318V11.4341H5.70682ZM9 16.3636C11.0591 16.3636 12.8011 15.6511 14.2261 14.2261C15.6511 12.8011 16.3636 11.0591 16.3636 9C16.3636 6.94091 15.6511 5.19886 14.2261 3.77386C12.8011 2.34886 11.0591 1.63636 9 1.63636C6.94091 1.63636 5.19886 2.34886 3.77386 3.77386C2.34886 5.19886 1.63636 6.94091 1.63636 9C1.63636 11.0591 2.34886 12.8011 3.77386 14.2261C5.19886 15.6511 6.94091 16.3636 9 16.3636Z"
            fill="#1C1B1F"
          />
        </svg>
      </div>
      <p className="text-center text-[10px] h-auto ">
        6 Kms
      </p>
    </div>
  );
};

export default Direction;
