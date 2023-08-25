// function searchRange(nums: number[], target: number): number[] {
//     let start = 0; 
//     let end = nums.length - 1; 

//     if (!nums.includes(target)) {
//         return [-1, -1]
//     }
//     if (nums.includes(target) && nums.length === 1) {
//         return [0, 0]
//     }

//     while (start < end) {
//         let mid = Math.floor(start + (end - start) / 2); 

//         if (nums[mid] === target)  {
//             if (nums[mid + 1] === target) {
//                 return [mid, mid + 1];
//             }
//             if (nums[mid - 1] === target) {
//                 return [mid - 1, mid];
//             }
//             return [-1, mid]
//         }

//         if (nums[mid] < target) {
//             start = mid
//         }

//         if (nums[mid] > target) {
//             end = mid
//         }
//     }

// };

function searchRange(nums: number[], target: number): number[] {
    let start = 0;
    let end = nums.length - 1;

    if (!nums.includes(target) || nums.length === 1 && nums[0] !== target) {
        return [-1, -1];
    }

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] === target) {
            let left = mid;
            while (left > 0 && nums[left - 1] === target) {
                left--;
            }
            
            let right = mid;
            while (right < nums.length - 1 && nums[right + 1] === target) {
                right++;
            }
            
            return [left, right];
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return [-1, -1];
}

