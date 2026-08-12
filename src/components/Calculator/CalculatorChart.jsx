import { AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = {
  primary: '#6C3CE1',
  primaryLight: '#9B81F5',
  accent: '#00D67E',
  accentDark: '#00b86b',
  bg: '#111638',
  text: '#94a3b8',
  white: '#ffffff',
};

/* Format currency for tooltip */
const formatCurrency = (val) => {
  if (val >= 10000000) return '₹' + (val / 10000000).toFixed(2) + ' Cr';
  if (val >= 100000) return '₹' + (val / 100000).toFixed(2) + ' L';
  return '₹' + Math.round(val).toLocaleString('en-IN');
};

/* Custom tooltip */
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: 'rgba(17,22,56,0.95)', padding: '12px 16px', borderRadius: '10px',
      border: '1px solid rgba(155,129,245,0.2)', backdropFilter: 'blur(10px)',
      fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem',
    }}>
      <p style={{ color: COLORS.white, fontWeight: 600, marginBottom: 6 }}>{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ color: entry.color, margin: '2px 0' }}>
          {entry.name}: {formatCurrency(entry.value)}
        </p>
      ))}
    </div>
  );
};

/* ── Growth Line Chart ── */
export function GrowthChart({ data }) {
  if (!data?.length) return null;

  return (
    <div className="calc-chart-wrapper">
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gradTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={COLORS.accent} stopOpacity={0.3} />
              <stop offset="95%" stopColor={COLORS.accent} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradInvested" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.3} />
              <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="year" tick={{ fill: COLORS.text, fontSize: 12 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => v >= 10000000 ? (v / 10000000).toFixed(1) + 'Cr' : v >= 100000 ? (v / 100000).toFixed(0) + 'L' : (v / 1000).toFixed(0) + 'k'}
            tick={{ fill: COLORS.text, fontSize: 12 }}
            axisLine={false} tickLine={false} width={55}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="totalValue" name="Total Value" stroke={COLORS.accent} fill="url(#gradTotal)" strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: COLORS.accent }} />
          <Area type="monotone" dataKey="invested" name="Invested" stroke={COLORS.primary} fill="url(#gradInvested)" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: COLORS.primary }} />
          <Legend
            wrapperStyle={{ paddingTop: 12, fontSize: '0.82rem', fontFamily: 'Poppins' }}
            iconType="circle" iconSize={8}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ── Split Doughnut Chart ── */
export function SplitChart({ invested, returns }) {
  if (!invested && !returns) return null;

  const data = [
    { name: 'Invested', value: invested },
    { name: 'Returns', value: returns },
  ];
  const pieColors = [COLORS.primary, COLORS.accent];

  return (
    <div className="calc-chart-wrapper calc-chart-split">
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data} cx="50%" cy="50%"
            innerRadius={55} outerRadius={85}
            paddingAngle={3} dataKey="value"
            strokeWidth={0}
            animationBegin={0} animationDuration={800}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={pieColors[i]} />
            ))}
          </Pie>
          <Tooltip formatter={(v) => formatCurrency(v)} contentStyle={{
            background: 'rgba(17,22,56,0.95)', border: '1px solid rgba(155,129,245,0.2)',
            borderRadius: '10px', fontFamily: 'Poppins', fontSize: '0.85rem', color: COLORS.white,
          }} />
          <Legend
            wrapperStyle={{ fontSize: '0.82rem', fontFamily: 'Poppins' }}
            iconType="circle" iconSize={8}
            formatter={(value) => <span style={{ color: COLORS.text }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ── Withdrawal Trend Chart ── */
export function WithdrawalChart({ data }) {
  if (!data?.length) return null;

  return (
    <div className="calc-chart-wrapper">
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gradBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={COLORS.primaryLight} stopOpacity={0.3} />
              <stop offset="95%" stopColor={COLORS.primaryLight} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="year" tick={{ fill: COLORS.text, fontSize: 12 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => v >= 10000000 ? (v / 10000000).toFixed(1) + 'Cr' : v >= 100000 ? (v / 100000).toFixed(0) + 'L' : (v / 1000).toFixed(0) + 'k'}
            tick={{ fill: COLORS.text, fontSize: 12 }}
            axisLine={false} tickLine={false} width={55}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="balance" name="Remaining Balance" stroke={COLORS.primaryLight} fill="url(#gradBalance)" strokeWidth={2.5} dot={false} />
          <Legend wrapperStyle={{ paddingTop: 12, fontSize: '0.82rem', fontFamily: 'Poppins' }} iconType="circle" iconSize={8} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
