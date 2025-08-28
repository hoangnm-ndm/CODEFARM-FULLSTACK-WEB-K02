const animals = ["elephant", "dog", "cat", "camel", "fish", "cat", "camel"];

/**
 * * Dùng reduce để đếm số lượng của các loài vật có trong mảng ban đầu.
 */

const countAnimals = animals.reduce((acc, cur) => {
	/**
	 * * Nếu như loài vật chưa có trong object đích (acc) thì tạo key với tên loài đó và số lượng là 1.
	 * * Nếu như loài vật này đã có trong object đích rồi (acc) thì chỉ tăng số lượng lên 1.
	 */

	if (acc[cur]) {
		acc[cur]++;
	} else {
		acc[cur] = 1;
	}
	return acc;
}, {});
console.log(countAnimals);
