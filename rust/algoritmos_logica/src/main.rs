fn main() {
    let arr = vec![0, 3, 5, 1, 2];
    let n = 6;
    let missing = missing_number_sum(&arr, n);
    println!("Missing number: {}", missing);
}

fn missing_number_sum(arr: &Vec<i32>, n: i32) -> i32 {
    let expected_sum = n * (n - 1) / 2;
    let actual_sum: i32 = arr.iter().sum();

    expected_sum - actual_sum
}
