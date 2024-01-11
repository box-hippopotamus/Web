; (function () {

    //交换DOM节点
    function swapNode(node1, node2) {
        let parent = node1.parentNode;
        let t1 = node1.nextSibling;
        let t2 = node2.nextSibling;

        if (t1) {
            parent.insertBefore(node2, t1);
        } else {
            parent.appendChild(node2);
        }
        if (t2) {
            parent.insertBefore(node1, t2);
        } else {
            parent.appendChild(node1);
        }
    }

    // 选择排序------------------------------------------------------
    function SelectSort(a, n) {
        let dataArr = Array.prototype.slice.apply(document.querySelectorAll(".view .data"));
        let begin = 0, end = n - 1;

        let prevNode1;
        let prevNode2;
        let prevNode3;
        let prevNode4;

        let timer = setInterval(function () {
            if (prevNode1 && prevNode2)
            {
                swapNode(prevNode1, prevNode2);
                prevNode1.style.backgroundColor = "skyblue";
                prevNode2.style.backgroundColor = "skyblue";
            }

            if (prevNode3 && prevNode4)
            {
                swapNode(prevNode3, prevNode4);
                prevNode3.style.backgroundColor = "skyblue";
                prevNode4.style.backgroundColor = "skyblue";
            }
            console.log(sortArr);

            if (begin < end) {
                let mini = begin, maxi = begin;
                for (let i = begin + 1; i <= end; i++) {
                    if (a[i] < a[mini]) {
                        mini = i;
                    }

                    if (a[i] > a[maxi]) {
                        maxi = i;
                    }
                }

                [a[begin], a[mini]] = [a[mini], a[begin]]
                prevNode1 = dataArr[begin];
                prevNode2 = dataArr[mini];
                dataArr[begin].style.backgroundColor = "pink";
                dataArr[mini].style.backgroundColor = "pink";
                [dataArr[begin], dataArr[mini]] = [dataArr[mini], dataArr[begin]]

                if (maxi === begin) {
                    maxi = mini;
                }
                [a[end], a[maxi]] = [a[maxi], a[end]]
                prevNode3 = dataArr[end];
                prevNode4 = dataArr[maxi];
                dataArr[end].style.backgroundColor = "gold";
                dataArr[maxi].style.backgroundColor = "gold";
                [dataArr[end], dataArr[maxi]] = [dataArr[maxi], dataArr[end]]


                begin++;
                end--;
            }
            else {
                clearInterval(timer);
            }

        }, 1000)
    }

    // 希尔排序------------------------------------------------------
    function ShellSort(arr, n) {
        let len = arr.length;
        let gap = len;
        let dataArr = Array.prototype.slice.apply(document.querySelectorAll(".view .data"));

        while (gap > 1) {
            gap = gap / 3 + 1;

            for (let i = 0; i < len - gap; i++) {
                let end = i;
                let tmp = arr[end + gap];
                while (end >= 0) {
                    if (tmp < a[end]) {
                        arr[end + gap] = arr[end];
                        // swapNode(dataArr[end + gap], dataArr[end]);
                        // [dataArr[end], dataArr[end]] = [dataArr[maxi], dataArr[end]]
                        end -= gap;
                    }
                    else {
                        break;
                    }
                }
                arr[end + gap] = tmp;
            }
        }
    }
    // 待定------------------------------------------------------


    // 初始渲染------------------------------------------------------
    sortArr = sessionStorage.getItem("sortArr").split(',').map((element) => Number(element));
    sortType = Number(sessionStorage.getItem("sortType"));

    // sortArr = [79, 94, 13, 9, 4, 64, 16, 66, 90, 26, 48, 87, 86, 2, 35, 41, 53, 60, 100, 74];
    // sortType = 1;
    const view = document.querySelector(".view");
    for (let i = 0; i < sortArr.length; i++) {
        const div = document.createElement("div");
        div.classList.add("data");
        div.style.height = `${sortArr[i] * 4}px`;
        view.appendChild(div);
    }

    if (sortType === 1)
        SelectSort(sortArr, sortArr.length);

    // if (sortType === 2)
    //     ShellSort(sortArr, sortArr.length);

})()