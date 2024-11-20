interface Props {
  id: number;
  star: string;
  heading: string;
  msg: string;
  userName: string;
  reviewDate: string;
}

export default function ReviewBox({
  id,
  star,
  heading,
  msg,
  userName,
  reviewDate,
}: Props) {
  return (
    <>
      <div className="bg-violet-200 min-w-60 p-2 space-y-2 rounded-xl sm:min-w-48">
        <div className="flex justify-between">
          <p className="font-bold">{star}</p>
          <p className="text-gray-500">{id}</p>
        </div>
        <div>
          <p className="font-bold line-clamp-1">{heading}</p>
          <p className="line-clamp-3 text-sm">{msg}</p>
        </div>
        <div>
          <span className="font-bold text-gray-600">{userName}</span>
          <span className="text-gray-600 text-sm">, {reviewDate}</span>
        </div>
      </div>
    </>
  );
}
