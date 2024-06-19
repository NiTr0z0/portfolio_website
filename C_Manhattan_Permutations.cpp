#include <bits/stdc++.h>

using namespace std;

template<typename A, typename B> ostream& operator<<(ostream &os, const pair<A, B> &p) { return os << '(' << p.first << ", " << p.second << ')'; }
template<typename T_container, typename T = typename enable_if<!is_same<T_container, string>::value, typename T_container::value_type>::type> ostream& operator<<(ostream &os, const T_container &v) { os << '{'; string sep; for (const T &x : v) os << sep << x, sep = ", "; return os << '}'; }
void dbg_out() { cerr << endl; }
template<typename Head, typename... Tail> void dbg_out(Head H, Tail... T) { cerr << ' ' << H; dbg_out(T...); }
#ifdef LOCAL
#define dbg(...) cerr << "(" << #__VA_ARGS__ << "):", dbg_out(__VA_ARGS__)
#else
#define dbg(...)
#endif

#define ar array
#define ll long long
#define ld long double
#define sza(x) ((int)x.size())
#define all(a) (a).begin(), (a).end()

const int MAX_N = 1e5 + 5;
const ll MOD = 1e9 + 7;
const ll INF = 1e9;
const ld EPS = 1e-9;

struct custom_hash {
    static uint64_t splitmix64(uint64_t x) {
        // http://xorshift.di.unimi.it/splitmix64.c
        x += 0x9e3779b97f4a7c15;
        x = (x ^ (x >> 30)) * 0xbf58476d1ce4e5b9;
        x = (x ^ (x >> 27)) * 0x94d049bb133111eb;
        return x ^ (x >> 31);
    }

    size_t operator()(uint64_t x) const {
        static const uint64_t FIXED_RANDOM = chrono::steady_clock::now().time_since_epoch().count();
        return splitmix64(x + FIXED_RANDOM);
    }
};

void solve() {
        ll n, k;
        cin >> n >> k;

        if (k % 2 != 0 || k > ((4 * (n-1))))
        {
            cout << "NO" << endl;   
            return;
        }

        ll placeholder = 2 * (n-1);
        ll seq = -1;
        for (int i = 0; i < (1 << n/2); i++) {
            ll sum  = 0;
            for (int j = 0; j < n/2; j++) {
                if ((i & (1 << j)) != 0) {
                    sum += placeholder - (j * (4));
                }
            if (sum == k)
            {
                seq = i;
                break;
            }
        }
        }
        string ans = "";
        for (int i = 1; i <= n ; i ++)
        {
            ans += to_string(i);
        }

        if (seq == -1)
        {
            if (k <= 2 * (n /2))
            {
                ll sum = 0;
                for (int i = 0; i < n; i += 2)
                {
                    if (sum == k)
                    {
                        break;
                    }
                    char temp = ans[i];
                    ans [i] = ans[i+1];
                    ans[i+1] = temp;
                    sum += 2;

                }
                cout << "YES" << endl;
                for (auto i : ans)
                {
                    cout << i << " ";
                }
                cout << endl;
            }
            else{
                cout << "NO" << endl;
            }
            return;
        }

        for (int j = 0; j < n; j++) {
                if ((seq & (1 << j)) != 0) {
                    char temp = ans[j];
                    ans[j] = ans[n - j - 1];
                    ans[n-j-1] = temp;  
                }
        }

        cout << "YES" << endl;

        for (auto x : ans)
        {
            cout << x << " ";
        }

        cout << endl;
    }




int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);
    int tc;
    cin >> tc;
    for (int t = 1; t <= tc; t++) {
        // cout << "Case #" << t << ": ";
        solve();
    }
}