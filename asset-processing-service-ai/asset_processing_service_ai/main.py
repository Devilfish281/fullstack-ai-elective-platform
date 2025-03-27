from time import sleep


def main():
    print("Hello, world!")
    i = 1  # initialize the counter
    while i <= 10:
        print(f"[{i}] Hello, world!", flush=True)
        i += 1
        sleep(1)


if __name__ == "__main__":
    main()
