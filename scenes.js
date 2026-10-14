const ic = (n, c = '') => `<svg class="ic ${c}" viewBox="0 0 24 24">${window.ICONS[n] || ''}</svg>`;
window.ic = ic;
const P = (x, y, w, h) => `left:${x}px;top:${y}px;${w ? `width:${w}px;` : ''}${h ? `height:${h}px;` : ''}`;
const A = (a, s = 0, i = 0, x = '') => `data-a="${a}" ${s ? '' : 'data-s0'} style="--s:${s};--i:${i};${x}"`;
const ib = (icon, c = '') => `<span class="ib ${c}">${ic(icon)}</span>`;
const head = ({ k, t, hs = 54, top = 60, lead, x = '' }) => `${k ? `<div class="kick" ${A('left')}>${k}</div>` : ''}
  <header class="head" style="top:${top}px;${x}"><h1 ${A('wipe', 0, 0, `font-size:${hs}px`)}>${t}</h1>${lead ? `<p class="lead" ${A('up', 0, 2)}>${lead}</p>` : ''}</header>`;
const msg = (t, s, i = 0, icon = 'target', c = '', x = '') =>
  `<div class="msg ${c}" ${A('zoom', s, i, x)}>${icon ? `<span class="msg-ic">${ic(icon)}</span>` : ''}<span>${t}</span></div>`;
const pk = (d, dur, b, o = '') => `<circle r="4.5" class="pk ${o}"><animateMotion dur="${dur}s" begin="${b}s" repeatCount="indefinite" path="${d}"/></circle>`;
const net = (paths) => `<svg class="wires" viewBox="0 0 1600 900">${paths.map(([d, s, i, n = 1, o = '', c = '']) =>
  `<path pathLength="1" class="${o} ${c}" d="${d}" ${A('draw', s, i)}/>${n ? `<g ${A('fade', s, i + 2)}>${Array.from({ length: n }, (_, k) => pk(d, 2.6, (-k * 2.6) / n, o)).join('')}</g>` : ''}`).join('')}</svg>`;
const pic = (src, a, c = '') => `<div class="pic ${c}" ${a}><img src="assets/img/${src}.jpg" alt="" decoding="async"></div>`;
const dotj = (arr) => arr.join(' · ');

const S = [];

/* 1 ─ Trang bìa */
S.push({ name: 'Trang bìa', pptx: 1, n: 1, cls: 'cover', html: `
  <div class="kick plain" ${A('left')}>Định hướng chuyển đổi số 2027–2030</div>
  <div class="co abs" ${A('right', 0, 1)}>Công ty Cổ phần Cấp nước Nhà Bè</div>
  ${pic('cover', A('fade', 0, 2, P(0, 398, 1600, 402)), 'cov kb')}
  <header class="head" style="top:100px"><h1 ${A('wipe', 0, 0, 'font-size:74px')}>Từ hệ sinh thái số<br><em>đến vận hành thông minh</em><br>dựa trên dữ liệu</h1></header>
  <div class="abs" ${A('zoom', 0, 3, P(470, 640, 660, 150))}><i class="pulse" style="inset:0"></i><i class="pulse r2" style="inset:0"></i></div>
  <div class="abs" ${A('spin', 0, 3.3, P(660, 404, 280, 280))}><i class="halo" style="inset:0"></i><i class="halo rev" style="inset:-26px"></i></div>
  <div class="spark abs" ${A('fade', 0, 3.6, P(0, 0, 1600, 900))}>${[[210, 470], [380, 520], [520, 450], [1090, 470], [1240, 520], [1400, 455], [300, 600], [1310, 600]].map(([x, y], k) => `<i class="flt" style="${P(x, y)}animation-delay:${-k * .7}s"></i>`).join('')}</div>
  <div class="msg kw" ${A('zoom', 0, 4)}>${['Kết nối dữ liệu', 'Nhìn thấy toàn diện', 'Phát hiện sớm', 'Hỗ trợ ra quyết định'].map((t, k) => `${k ? '<i class="sep">·</i>' : ''}<span ${A('up', 0, 4.3 + k * .3)}>${t}</span>`).join('')}</div>` });

/* 2 ─ Hành trình */
const ms = [
  ['Số hóa quy trình', 'Hồ sơ và thao tác nghiệp vụ từng bước chuyển lên môi trường số.', 100, 282, 'j1', P(66, 470, 300, 200)],
  ['Web & Mobile', 'Kết nối tác nghiệp tại văn phòng với hoạt động hiện trường.', 485, 282, 'j2', P(478, 470, 300, 190)],
  ['Liên thông nghiệp vụ', 'Dữ liệu bắt đầu đi xuyên qua nhiều khâu thay vì dừng lại tại từng bộ phận.', 845, 262, 'j3', P(850, 440, 260, 200)],
  ['Hình thành hệ sinh thái', 'Từng bước hình thành nền tảng Kinh doanh và Kỹ thuật phục vụ vận hành.', 1238, 200, 'j4', P(1232, 410, 330, 240)],
];
S.push({ name: 'Hành trình 2024–2026', pptx: 2, n: 3, html: `
  ${head({ k: 'Hành trình 2024–2026', t: 'Từ số hóa từng nghiệp vụ<br><em>đến hình thành hệ sinh thái vận hành số</em>', hs: 54, top: 72 })}
  <svg class="wires" viewBox="0 0 1600 900"><path pathLength="1" class="river" d="M-20 640 C180 580 300 690 470 630 S760 560 900 600 S1150 560 1300 540 S1520 500 1640 470" ${A('draw', 0, 3)}/>
    <g ${A('fade', 0, 4)}><path class="flow" d="M-20 640 C180 580 300 690 470 630 S760 560 900 600 S1150 560 1300 540 S1520 500 1640 470"/></g></svg>
  ${ms.map(([t, d, x, y, img, pp], k) => `
    <div class="num abs" ${A('zoom', 1, k * 1.5, P(x, y))}>0${k + 1}</div>
    <div class="ms abs" ${A('up', 1, k * 1.5 + .4, P(x, y + 74, k === 3 ? 345 : 330))}><div class="ttl">${t}</div><p class="dsc">${d}</p></div>
    ${pic(img, A('zoom', 1, k * 1.5 + .8, pp), 'me')}`).join('')}
  <div class="concl abs" ${A('zoom', 2, 0, P(150, 676, 1300))}>Nền tảng đã hình thành<br><em>và đang tiếp tục được hoàn thiện</em></div>
  ${msg('Đây là tiền đề để bước sang giai đoạn khai thác sâu hơn giá trị của dữ liệu.', 2, 2, 'droplet', 'plain')}` });

/* 3 ─ Bức tranh hiện tại */
const fl = (items, s, i0) => items.map(([ico, t, c = ''], k) => `${k ? `<i class="nudge ar">${ic('arrow-right')}</i>` : ''}<span class="fi" ${A('up', s, i0 + k * .5)}>${ib(ico, 'soft ' + c)}<b>${t}</b></span>`).join('');
const sat = [
  ['users', 'Khách hàng', 'Thông tin · Nhân khẩu · Định mức · Giá biểu', 805, 196],
  ['gauge', 'Đồng hồ nước', 'Thông tin ĐHN · Lịch sử thay', 632, 300],
  ['bar-chart-2', 'Tiêu thụ', 'Chỉ số · Lịch sử tiêu thụ', 978, 300],
  ['file-text', 'Nghiệp vụ', 'Hồ sơ · Công văn · Đóng/Mở nước', 632, 512],
  ['coins', 'Tài chính', 'Hóa đơn · Công nợ', 978, 512],
  ['headphones', 'Chăm sóc', 'Khiếu nại · CSKH · Tin nhắn', 805, 608],
];
const kdRows = [['gauge', 'Ghi chỉ số nước', 'Đọc số · Hình ảnh ĐHN · Tiêu thụ'], ['receipt', 'Thu tiền & công nợ', 'Hóa đơn · Thu tiền · Nhắc nợ · Đóng/Mở nước'], ['search', 'Kiểm tra kiểm soát', 'Tiếp nhận · Phân công · Xử lý · Kết quả']];
const base3 = [['monitor', 'Web / Mobile'], ['settings', 'API'], ['database', 'CSDL'], ['map-pin', 'GIS'], ['server', 'Hạ tầng'], ['shield-check', 'An toàn thông tin']];
S.push({ name: 'Hiện trạng hệ sinh thái', pptx: 3, n: 4, html: `
  ${head({ k: 'Hiện trạng hệ sinh thái số', t: 'Bức tranh hệ sinh thái số hiện tại<span class="sub"><em>Các mảnh ghép đã hình thành<br>dữ liệu đang từng bước được kết nối</em></span>', hs: 38, top: 14 })}
  ${net([
    ['M280 614 C280 680 420 698 526 698', 2, 2, 1],
    ['M1320 614 C1320 680 1180 698 1078 698', 2, 2.4, 1],
    ['M200 740 V616', 3, 1, 1],
    ['M1400 740 V616', 3, 1.4, 1],
    ['M800 740 V730', 3, 1.8, 0],
    ['M700 590 V666', 2, 3, 1, 'o'],
    ['M910 590 V666', 2, 3.3, 1, 'o'],
  ])}
  <div class="abs" ${A('zoom', 0, 1, P(585, 182, 440, 440))}><i class="halo" style="inset:0"></i><i class="halo rev" style="inset:56px"></i><i class="hubglow"></i></div>
  <div class="hub-t abs" ${A('up', 0, 2.6, P(675, 466, 260))}><b>Danh bộ tập trung</b><small>Góc nhìn 360° về khách hàng</small></div>
  ${pic('hub', A('zoom', 0, 2.2, P(700, 334, 210, 130)), 'me')}
  ${sat.map(([i, t, d, x, y], k) => `<div class="sat card abs" ${A('zoom', 0, 3 + k * .3, P(x - 64, y - 46, 128))}>${ib(i, 'sm')}<b>${t}</b><small>${d}</small></div>`).join('')}
  <div class="glass pnl abs" ${A('left', 1, 0, P(24, 152, 438, 462))}>
    <div class="pnl-h">${ib('settings', 'lg')}<div><div class="pnl-t">Khối kỹ thuật</div><div class="pnl-s">Công tác & hiện trường</div></div></div>
    <div class="subc"><div class="subc-t">Thi công & hoàn công vật tư</div><div class="frow">${fl([['clipboard-list', 'Khảo sát'], ['construction', 'Thi công'], ['file-check', 'Hoàn công'], ['package', 'Vật tư']], 1, 1)}</div></div>
    <div class="subc"><div class="subc-t">Thay đồng hồ nước</div><div class="frow">${fl([['gauge', 'Báo thay', 'r'], ['clipboard-check', 'Giao việc'], ['gauge', 'Thay ĐHN'], ['file-check', 'Hoàn công']], 1, 3)}</div></div>
  </div>
  <div class="glass pnl abs" ${A('right', 1, 0, P(1142, 152, 436, 462))}>
    <div class="pnl-h">${ib('bar-chart-2', 'lg')}<div><div class="pnl-t">Khối kinh doanh</div><div class="pnl-s">Khách hàng & doanh thu</div></div></div>
    ${kdRows.map(([i, t, d], k) => `<div class="kdr" ${A('right', 1, 1.5 + k * .8)}>${ib(i, 'soft lg')}<div><b>${t}</b><small>${d}</small></div></div>`).join('')}
  </div>
  <div class="conn abs" ${A('fade', 2, 0, P(470, 282, 92))}>Hoàn công<br>Thay ĐHN<br>Thông tin ĐHN<br>Lịch sử thay<span class="dar">${ic('arrow-right')}${ic('arrow-right')}</span></div>
  <div class="conn abs" ${A('fade', 2, .5, P(1050, 282, 88))}>Ghi chỉ số<br>Hóa đơn<br>Công nợ<br>CSKH<span class="dar">${ic('arrow-left-right')}${ic('arrow-left-right')}</span></div>
  <div class="glass gold tm3 abs" ${A('up', 2, 1, P(528, 668, 548, 60))}>${ib('bar-chart-2', 'gold')}<div><b>Tham mưu</b><small>Tài chính · Kho · Vật tư · Kế hoạch · Dự án · Quản trị nội bộ</small></div></div>
  <div class="glass base3 abs" ${A('wipe', 3, 0, P(48, 738, 1505, 74))}>
    <span class="ib xl b3">${ic('cloud')}</span><b class="b3t">Nền tảng công nghệ</b>
    ${base3.map(([i, t], k) => `<span class="b3i" ${A('up', 3, 1 + k * .45)}>${ic(i)}${t}</span>`).join('')}
  </div>
  ${msg('Kết nối các mảnh ghép <em>thành một hệ sinh thái dữ liệu thống nhất</em>', 3, 4, 'git-merge', '', 'font-size:22px;bottom:12px;padding-top:9px;padding-bottom:9px')}` });

/* 4 ─ Điểm chuyển */
const lft4 = [['file-text', 'Quy trình'], ['monitor', 'Web / Mobile'], ['database', 'Dữ liệu nghiệp vụ'], ['share-2', 'Liên thông từng bước'], ['layers', 'Hình thành hệ sinh thái']];
const rgt4 = [['link', 'Kết nối'], ['eye', 'Nhìn thấy'], ['bar-chart-2', 'Phát hiện'], ['search', 'Phân tích'], ['trending-up', 'Dự báo'], ['list-checks', 'Ưu tiên'], ['settings', 'Hành động']];
const nodes4 = [['database', 'Có dữ liệu', 452, 455], ['eye', 'Nhìn thấy', 570, 474], ['bar-chart-2', 'Hiểu', 688, 490], ['search', 'Phát hiện sớm', 806, 500], ['trending-up', 'Dự báo', 924, 494], ['list-checks', 'Ưu tiên', 1042, 478], ['settings', 'Hành động', 1150, 462]];
const rib4 = 'M405 470 C520 410 600 520 760 505 S1000 440 1150 465 L1185 468';
S.push({ name: 'Điểm chuyển', pptx: 4, n: 4, html: `
  ${head({ k: 'Điểm chuyển 2027–2030', t: 'Từ số hóa để có dữ liệu<br>đến khai thác dữ liệu để điều hành', hs: 56, top: 74 })}
  <div class="glass phase abs" ${A('left', 0, 2, P(30, 228, 370, 512))}>
    <div class="ph-k">Giai đoạn xây nền</div><div class="ph-t grad">Số hóa</div>
    ${lft4.map(([i, t], k) => `<div class="phr" ${A('left', 0, 2.5 + k * .4)}>${ib(i, 'soft lg')}<span>${t}</span></div>`).join('')}
  </div>
  ${pic('lake', A('fade', 1, 0, P(420, 590, 960, 150)), 'me')}
  <svg class="wires rib" viewBox="0 0 1600 900"><defs><linearGradient id="rg4" x1="0" x2="1"><stop offset="0" stop-color="#bfe3ff"/><stop offset=".5" stop-color="#3aa8ff"/><stop offset="1" stop-color="#0b63e5"/></linearGradient></defs>
    <path pathLength="1" d="${rib4}" class="ribbon" ${A('draw', 1, 0)}/>
    <g ${A('fade', 1, 2)}><path class="flow" d="${rib4}"/></g>
    <path d="M1180 432 L1236 468 L1180 504 Z" class="arhead" ${A('zoom', 1, 5)}/></svg>
  ${nodes4.map(([i, t, x, y], k) => `<div class="nd abs" ${A('zoom', 1, .6 + k * .6, P(x - 40, y - 40, 80))}>${ib(i, 'soft xl')}<b>${t}</b></div>${k < 6 ? `<i class="nudge ch abs" style="${P(x + 46, y - 14)}">${ic('chevron-right')}</i>` : ''}`).join('')}
  <div class="glass phase r abs" ${A('right', 2, 0, P(1240, 228, 340, 512))}>
    <div class="ph-k">Giai đoạn phát triển</div><div class="ph-t2 grad">Vận hành dựa trên dữ liệu</div>
    ${rgt4.map(([i, t], k) => `<div class="phr sm" ${A('right', 2, .5 + k * .45)}>${ib(i, 'soft sm')}<span>${t}</span></div>`).join('')}
  </div>
  ${msg('Giá trị không nằm ở việc lưu trữ dữ liệu,<br><em>mà ở khả năng biến dữ liệu thành hành động quản trị.</em>', 3, 0, '', 'two', 'bottom:22px')}` });

/* 5 ─ Mô hình vận hành số */
const blk5 = [
  ['Kinh doanh', 'Khách hàng & doanh thu', 'users', '', [['users', 'Khách hàng'], ['bar-chart-2', 'Tiêu thụ'], ['receipt', 'Hóa đơn'], ['coins', 'Công nợ'], ['headphones', 'CSKH']], 34, 490],
  ['Kỹ thuật', 'Mạng lưới & hiện trường', 'settings', 'teal', [['wrench', 'Tài sản'], ['hard-hat', 'Công tác'], ['gauge', 'Đồng hồ nước'], ['alert-triangle', 'Sự cố'], ['settings', 'Bảo trì']], 563, 474],
  ['Tham mưu', 'Quản trị & nguồn lực', 'file-stack', 'gold', [['coins', 'Tài chính'], ['package', 'Vật tư'], ['calendar', 'Kế hoạch'], ['file-text', 'Dự án'], ['clipboard-check', 'Công việc']], 1076, 490],
];
S.push({ name: 'Mô hình vận hành số', pptx: 5, n: 4, html: `
  ${head({ k: 'Mô hình định hướng 2027–2030', t: 'Mô hình vận hành số<br><em>định hướng 2027–2030</em>', hs: 56, top: 24 })}
  ${blk5.map(([t, st, i, c, items, x, w], k) => `<div class="glass blk ${c} abs" ${A('up', 0, 2 + k * .7, P(x, 374, w, 230))}>
      <div class="blk-h">${ib(i, 'xl ' + c)}<div><div class="blk-t">${t}</div><div class="blk-s ${c}">${st}</div></div></div>
      <div class="blk-r">${items.map(([ii, tt], q) => `<span ${A('up', 0, 2.4 + k * .7 + q * .15)}>${ib(ii, 'soft lg ' + (c === 'teal' ? 't' : c === 'gold' ? 'g' : ''))}<b>${tt}</b></span>`).join('')}</div></div>`).join('')}
  <i class="lr abs" ${A('fade', 0, 4, P(526, 470))}>${ic('arrow-left-right')}</i><i class="lr abs" ${A('fade', 0, 4, P(1039, 470))}>${ic('arrow-left-right')}</i>
  <div class="plat abs" ${A('up', 1, 0, P(100, 628, 1400, 156))}><i></i><i></i><i></i></div>
  <div class="basecap abs" ${A('zoom', 1, 1, P(430, 640, 740, 116))}>${ib('database', 'lg')}<div><b>Công nghệ & dữ liệu</b><small>Tích hợp · Dữ liệu · GIS · Giám sát · An toàn thông tin · Hạ tầng</small></div></div>
  ${net([['M290 660 V606', 1, 2, 1, 't'], ['M800 640 V606', 1, 2.3, 1, 't'], ['M1320 660 V606', 1, 2.6, 1, 't'],
    ['M290 372 C290 330 400 300 470 292', 2, 2, 1], ['M800 372 V336', 2, 2.3, 1], ['M1320 372 C1320 330 1200 300 1130 292', 2, 2.6, 1]])}
  ${pic('exec', A('down', 2, 0, P(575, 140, 450, 110)), 'me')}
  <div class="disc abs" ${A('zoom', 2, .6, P(450, 232, 700, 104))}><b>Điều hành doanh nghiệp</b><small>Theo dõi · Phát hiện · Phân tích · Ưu tiên · Ra quyết định</small></div>
  ${msg('Mỗi hệ thống được phát triển cần có khả năng kết nối<br>và <em>đóng góp dữ liệu</em> cho hệ sinh thái chung.', 3, 0, '', 'two', 'bottom:14px;font-size:23px')}` });

/* 6 ─ 5 trục */
const ax6 = [
  ['Hoàn thiện hệ thống nghiệp vụ lõi', 'Hoàn thiện quy trình · Đồng bộ nghiệp vụ · Giảm thao tác rời rạc'],
  ['Kết nối & quản trị dữ liệu', 'Liên thông hệ thống · Dữ liệu dùng chung · Một nguồn dữ liệu tin cậy'],
  ['GIS & không gian vận hành chung', 'Tài sản · Khách hàng · Sự cố · Công tác · Điểm giám sát'],
  ['Giám sát & điều hành tập trung', 'Mạng lưới nước · Hạ tầng CNTT · Thông tin phục vụ điều hành'],
  ['Phân tích, dự báo & hỗ trợ quyết định', 'Phát hiện · Dự báo · Ưu tiên · Hỗ trợ hành động'],
];
S.push({ name: '05 trục phát triển', pptx: 6, n: 3, html: `
  ${head({ k: 'Định hướng 2027–2030', t: '05 trục phát triển<br><em>xuyên suốt 2027–2030</em>', hs: 60, top: 26 })}
  ${ax6.map(([t, d], k) => `<div class="glass axc abs" ${A('flip', 0, 1.5 + k * .55, P(32 + k * 310, 180, 296, 440))}>
      <div class="axn" ${A('spin', 0, 2 + k * .55)}><span class="num">0${k + 1}</span></div>
      ${pic('ax' + (k + 1), A('zoom', 0, 2.2 + k * .55, P(13, 64, 270, 180)), 'me')}
      <div class="axt">${t}</div><i class="axl"></i><p class="axd">${d}</p></div>`).join('')}
  ${net([0, 1, 2, 3, 4].map((k) => { const x = 180 + k * 310; return [`M${x} 620 C${x} 668 ${(x + 800) / 2} 672 800 ${k === 2 ? 640 : 690}`, 1, k * .3, 1]; }))}
  ${pic('drop7', A('zoom', 1, 1.5, P(600, 604, 400, 170)), 'me')}
  <div class="abs" ${A('fade', 1, 2, P(640, 690, 320, 70))}><i class="pulse" style="inset:0"></i><i class="pulse r2" style="inset:0"></i></div>
  ${msg('Triển khai linh hoạt theo mức độ ưu tiên, nguồn lực và độ sẵn sàng dữ liệu<br><em>Không đóng khung theo từng năm</em>', 2, 0, '', 'two', 'bottom:14px;font-size:23px')}` });

/* 7 ─ Danh mục */
const col7 = [
  ['Kinh doanh', 'Khách hàng & doanh thu', 'c1', '', [['contact', 'Danh bộ tập trung – mở rộng'], ['user', 'Customer 360°'], ['map-pin', 'Khách hàng trên GIS'], ['bar-chart-2', 'Phân tích tiêu thụ'], ['receipt', 'Phân tích hóa đơn & công nợ'], ['headphones', 'Phân tích CSKH & khiếu nại'], ['cpu', 'Hỗ trợ kinh doanh bằng AI']]],
  ['Kỹ thuật', 'Mạng lưới & hiện trường', 'c2', 'teal', [['siren', 'Quản lý sự cố'], ['network', 'Quản lý tài sản mạng lưới'], ['wrench', 'Bảo trì & bảo dưỡng'], ['map', 'GIS mạng lưới'], ['monitor', 'SCADA'], ['bar-chart-3', 'Phân tích dữ liệu vận hành'], ['cpu', 'Hỗ trợ kỹ thuật bằng AI'], ['layers', 'Digital Twin']]],
  ['Tham mưu', 'Quản trị & nguồn lực', 'c3', 'gold', [['coins', 'Tài chính – kế toán'], ['package', 'Kho – vật tư'], ['clipboard-list', 'Quản lý nhiệm vụ liên phòng ban'], ['calendar', 'Quản lý kế hoạch'], ['briefcase', 'Quản lý dự án'], ['users', 'Quản trị nguồn lực'], ['bar-chart-2', 'Báo cáo điều hành tham mưu'], ['pie-chart', 'Phân tích & dự báo']]],
  ['Công nghệ & dữ liệu', 'Nền tảng dùng chung', 'c4', 'ind', [['map', 'Nền tảng GIS'], ['database', 'Nền tảng dữ liệu'], ['share-2', 'Nền tảng tích hợp'], ['monitor', 'NOC'], ['activity', 'IOC'], ['cpu', 'Nền tảng AI & phân tích'], ['shield-check', 'An toàn thông tin'], ['server', 'Hạ tầng số']]],
];
S.push({ name: 'Danh mục giải pháp', pptx: 7, n: 3, html: `
  ${head({ k: 'Danh mục định hướng 2027–2030', t: 'Danh mục giải pháp & công nghệ<br><em>định hướng 2027–2030</em>', hs: 46, top: 58 })}
  ${col7.map(([t, st, img, c, items], k) => `<div class="glass col7 ${c} abs" ${A('up', 0, 2 + k * .6, P(30 + k * 391, 184, 376, 588))}>
      ${pic(img, A('zoom', 0, 2.5 + k * .6, P(6, 4, 140, 112)), 'me')}
      <div class="c7h"><b>${t}</b><small>${st}</small></div>
      <div class="c7l">${items.map(([i, tt], q) => `<div class="li" ${A('left', 1, k * .9 + q * .3, '--len:.45')}>${ib(i, 'soft sm ' + (c === 'teal' ? 't' : c === 'gold' ? 'g' : ''))}<span>${tt}</span></div>`).join('')}</div></div>`).join('')}
  ${msg('Thứ tự và thời điểm triển khai được xác định<br><small>theo nhu cầu thực tế, mức độ ưu tiên, hiệu quả đầu tư, nguồn lực và điều kiện triển khai.</small><br><em>Không đóng khung hạng mục theo từng năm</em>', 2, 0, '', 'two', 'bottom:10px;font-size:21px;padding:8px 40px')}` });

/* 8 ─ Khối kinh doanh */
const st8 = [['Tiếp nhận & hồ sơ', 'Thông tin khách hàng · Hồ sơ · Định mức · Giá biểu'], ['Ghi chỉ số & tiêu thụ', 'ĐHN · Chỉ số · Tiêu thụ · Lịch sử'], ['Hóa đơn', 'Hóa đơn · Điều chỉnh · Lịch sử'], ['Thanh toán & công nợ', 'Thu tiền · Nhắc nợ · Công nợ · Đóng/Mở nước'], ['CSKH & kiểm tra kiểm soát', 'Tiếp nhận · Khiếu nại · Xử lý · Lịch sử chăm sóc']];
const cx8 = [190, 500, 800, 1100, 1410];
const wv8 = 'M-20 500 C120 460 220 540 340 495 S560 455 650 498 S860 540 950 495 S1150 455 1250 498 S1480 530 1640 480';
S.push({ name: 'Khối Kinh doanh', pptx: 8, n: 4, html: `
  <div class="kick" ${A('left')}>Định hướng 2027–2030</div>
  <div class="tagline" ${A('down', 0, 0, 'top:18px;font-size:42px')}>Khối kinh doanh</div>
  <header class="head" style="top:100px"><h1 ${A('wipe', 0, 1, 'font-size:46px')}>Từ quản lý giao dịch<br><em>đến quản trị xuyên suốt vòng đời khách hàng</em></h1></header>
  <svg class="wires" viewBox="0 0 1600 900"><path pathLength="1" class="river" d="${wv8}" ${A('draw', 0, 2)}/><g ${A('fade', 0, 3)}><path class="flow" d="${wv8}"/></g></svg>
  ${st8.map(([t, d], k) => `${pic('l' + (k + 1), A('zoom', 0, 2.4 + k * .4, P(cx8[k] - 75, 418, 150, 120)), 'mr')}
    <div class="st8 abs" ${A('up', 0, 2.6 + k * .4, P(cx8[k] - 150, 544, 300))}><b>${t}</b><small>${d}</small></div>
    ${k < 4 ? `<i class="nudge ar8 abs" style="${P((cx8[k] + cx8[k + 1]) / 2 - 18, 478)}">${ic('arrow-right')}</i>` : ''}`).join('')}
  ${cx8.map((x, k) => `<i class="ud abs" ${A('growy', 1, k * .3, P(x - 22, 640))}>${ic('arrow-up-down')}${ic('arrow-up-down')}</i>`).join('')}
  <div class="glass navy db8 abs" ${A('wipe', 1, 1.6, P(60, 688, 1480, 100))}>
    ${pic('db8', A('spin', 1, 2.4, P(150, -6, 110, 100)), 'mr')}
    <div class="db8t"><b>Danh bộ tập trung</b><small>Trục dữ liệu khách hàng</small></div><i class="db8s"></i>
    <div class="db8i">${['Thông tin khách hàng', 'Định mức', 'Giá biểu', 'ĐHN', 'Lịch sử'].map((t, k) => `<span ${A('up', 1, 2.8 + k * .3)}>${t}</span>`).join('<i>·</i>')}</div>
    <div class="bits abs" style="${P(300, 76, 1160)}"><span>${'0110 1001 1100 0101 1010 0011 '.repeat(14)}</span></div>
  </div>
  ${pic('wave8', A('fade', 2, 0, P(0, 228, 560, 175)), 'mk')}
  ${pic('map8', A('zoom', 2, .4, P(565, 226, 425, 200)), 'me')}
  ${[[700, 300], [812, 265], [945, 285], [865, 335]].map(([x, y], k) => `<div class="abs" ${A('fade', 2, 1 + k * .2, P(x - 28, y - 16, 56, 32))}><i class="pulse" style="inset:0"></i></div>`).join('')}
  <div class="abs" ${A('fade', 2, 1.8, P(950, 318, 60, 36))}><i class="pulse red" style="inset:0"></i><i class="pulse red r2" style="inset:0"></i></div>
  <div class="glass legend abs" ${A('right', 2, 1, P(1004, 222, 232, 190))}><div class="lg-t">GIS kinh doanh</div>
    ${[['map-pin', 'Khách hàng'], ['gauge', 'ĐHN'], ['droplet', 'Tiêu thụ'], ['database', 'Công nợ'], ['alert-triangle', 'Khiếu nại', 'r']].map(([i, t, c = ''], k) => `<div class="lg-i ${c}" ${A('right', 2, 1.4 + k * .25)}>${ic(i)}${t}</div>`).join('')}</div>
  <div class="glass legend al abs" ${A('right', 2, 1.6, P(1252, 222, 328, 190))}><div class="lg-t">Phân tích & cảnh báo</div>
    ${[['bar-chart-2', 'Tiêu thụ bất thường'], ['alert-triangle', 'Nợ kéo dài', 'r'], ['map-pin', 'Khiếu nại tập trung'], ['bell', 'Ưu tiên xử lý']].map(([i, t, c = ''], k) => `<div class="lg-i ${c}" ${A('right', 2, 2 + k * .25)}>${ic(i)}${t}</div>`).join('')}
    <div class="mini abs" style="${P(214, 70, 100, 110)}">${[30, 44, 38, 60, 92].map((h, k) => `<i ${A('grow', 2, 2.4 + k * .2, `height:${h}px;${k === 4 ? 'background:linear-gradient(#ff7a7a,#e23b3b)' : ''}`)}></i>`).join('')}<b class="alert-dot">!</b></div></div>
  <div class="msg mflow" ${A('zoom', 3, 0, 'bottom:14px')}>
    <span ${A('up', 3, .6)}>${ib('search', 'soft')}Từ tra cứu thông tin</span><i class="nudge">${ic('arrow-right')}</i>
    <span class="hl" ${A('up', 3, 1.2)}>${ib('lightbulb', 'soft o')}<em>Hiểu xuyên suốt khách hàng</em></span><i class="nudge">${ic('arrow-right')}</i>
    <span ${A('up', 3, 1.8)}>${ib('users', 'soft')}Chủ động phục vụ</span></div>` });

/* 9 ─ Khối kỹ thuật */
const kt9 = (t, pills, d, img, c = '') => `<div class="kt9h"><b>${t}</b>${pills}</div><p class="kt9d">${d}</p>${pic(img, '', 'kt9i ' + c)}`;
S.push({ name: 'Khối Kỹ thuật', pptx: 9, n: 4, html: `
  ${head({ k: 'Định hướng 2027–2030', t: '<span class="sub">Khối kỹ thuật</span>Từ quản lý công tác<br><em>đến vận hành mạng lưới chủ động</em>', hs: 52, top: 22 })}
  ${pic('city', A('zoom', 0, 2, P(606, 198, 436, 604)), 'me')}
  ${[[687, 640, 'red'], [911, 388, 'orange'], [991, 620, 'orange'], [800, 548, ''], [870, 300, '']].map(([x, y, c], k) => `<div class="abs" ${A('fade', 0, 3 + k * .3, P(x - 40, y - 22, 80, 44))}><i class="pulse ${c}" style="inset:0"></i><i class="pulse ${c} r2" style="inset:0"></i></div>`).join('')}
  ${net([['M596 268 H628 V430', 1, 1.5, 1], ['M606 640 H632 V525', 1, 2.5, 1], ['M1042 270 H1010 V410', 2, 1.5, 1, 't'], ['M1034 655 H985 V612', 2, 2.5, 1, 'o']])}
  <div class="glass kt9 abs" ${A('left', 1, 0, P(36, 206, 560, 196))}>${kt9('Tài sản & công tác', '<span class="pill">Có gì?</span>', 'Tài sản · Công tác · Sự cố · Bảo trì · Lịch sử', 'kt1')}</div>
  <div class="glass kt9 abs" ${A('left', 1, 1, P(36, 586, 570, 192))}>${kt9('GIS mạng lưới', '<span class="pill">Ở đâu?</span>', 'Đường ống · Van · ĐHN · Tài sản · Sự cố · Công tác', 'kt2')}</div>
  <div class="glass kt9 abs" ${A('right', 2, 0, P(1042, 206, 536, 196))}>${kt9('Giám sát vận hành', '<span class="pill teal">SCADA</span><span class="pill ghost">Đang xảy ra gì?</span>', 'Áp lực · Lưu lượng · Chất lượng nước · Trạng thái · Cảnh báo', 'kt3')}</div>
  <div class="glass kt9 abs" ${A('right', 2, 1, P(1034, 566, 544, 214))}>${kt9('Phân tích & mô phỏng', '<span class="pill">Digital Twin</span>', 'Phát hiện sớm · Dự báo · Ưu tiên · Mô phỏng tác động', 'kt4')}
    <div class="kt9q"><span class="pill ghost" ${A('zoom', 2, 2)}>Có thể xảy ra gì?</span><span class="pill ghost" ${A('zoom', 2, 2.4)}>Cần làm gì trước?</span></div></div>
  ${msg('Từ xử lý sau khi sự cố xảy ra <i class="nudge flow-ar">' + ic('arrow-right') + '</i> <em>Phát hiện sớm</em> <i class="nudge flow-ar">' + ic('arrow-right') + '</i> <em>Chủ động vận hành</em>', 3, 0, 'activity', '', 'bottom:14px')}` });

/* 10 ─ Khối tham mưu */
const tm10 = [['Tài chính & nguồn lực', 'Tài chính · Kế toán · Ngân sách', 'tm1', 34, 335], ['Vật tư & chi phí', 'Kho · Vật tư · Quyết toán', 'tm2', 388, 378], ['Kế hoạch · Dự án · Nhiệm vụ', 'Tiến độ · Trách nhiệm · Kết quả', 'tm3', 786, 432], ['Tham mưu điều hành', 'Phân tích · Chênh lệch · Cảnh báo · Dự báo', 'tm4', 1236, 333]];
const chips = (arr, s) => arr.map(([i, t], k) => `${k ? `<i class="cs">${ic('chevron-right')}</i>` : ''}<span class="chip" ${A('up', s, .5 + k * .35)}>${ic(i)}<b>${t}</b></span>`).join('');
const rb10 = 'M20 590 C200 560 300 620 480 590 S760 560 900 592 S1180 620 1300 588 S1500 560 1600 580';
S.push({ name: 'Khối Tham mưu', pptx: 10, n: 4, html: `
  <div class="kick" ${A('left')}>Định hướng 2027–2030</div>
  <div class="tagline gold" ${A('zoom', 0, 0, 'top:16px;font-size:56px;padding:8px 60px')}>Khối tham mưu</div>
  <header class="head" style="top:118px"><h1 ${A('wipe', 0, 1, 'font-size:43px')}>Từ theo dõi <em>từng phần việc</em><br>đến <em>quản trị nguồn lực liên thông</em></h1></header>
  <svg class="wires" viewBox="0 0 1600 900"><path pathLength="1" class="band" d="${rb10}" ${A('draw', 0, 2)}/><g ${A('fade', 0, 3)}><path class="flow" d="${rb10}"/></g></svg>
  ${tm10.map(([t, d, img, x, w], k) => `<div class="glass tm10 abs" ${A('up', 0, 2.2 + k * .5, P(x, 262, w, 318))}>
      <span class="badge" ${A('spin', 0, 2.6 + k * .5)}>0${k + 1}</span><b>${t}</b><small>${d}</small>
      ${pic(img, A('zoom', 0, 2.8 + k * .5, `left:50%;margin-left:-${Math.min(w - 20, 380) / 2}px;top:118px;width:${Math.min(w - 20, 380)}px;height:190px`), 'me')}</div>
    ${k < 3 ? `<i class="nudge chv abs" style="${P(x + w + 2, 560)}">${ic('chevron-right')}</i>` : ''}`).join('')}
  <div class="glass chips abs" ${A('up', 1, 0, P(352, 640, 424, 96))}>${chips([['file-text', 'Nhu cầu'], ['package', 'Cấp phát'], ['settings', 'Sử dụng'], ['file-check', 'Hoàn công'], ['database', 'Quyết toán']], 1)}</div>
  <div class="glass chips abs" ${A('up', 2, 0, P(792, 640, 500, 96))}>${chips([['file-text', 'Lập kế hoạch'], ['users', 'Giao nhiệm vụ'], ['settings', 'Thực hiện'], ['bell', 'Nhắc việc'], ['file-search', 'Trình duyệt'], ['pen-line', 'Ký điện tử'], ['check-circle', 'Hoàn tất']], 2)}</div>
  ${msg('Nguồn lực minh bạch · Tiến độ rõ ràng · Trách nhiệm xuyên suốt · Dữ liệu phục vụ điều hành', 3, 0, 'badge-check', '', 'bottom:16px;font-size:23px')}` });

/* 11 ─ Công nghệ & dữ liệu */
const ly11 = [
  ['04', 'Phân tích & hỗ trợ quyết định', 'Phân tích · Cảnh báo · Dự báo · Ưu tiên', 'ly4', 330, 262, 940, 300],
  ['03', 'GIS & giám sát', 'GIS · Kết nối SCADA · NOC · IOC', 'ly3', 312, 402, 976, 400],
  ['02', 'Tích hợp & dữ liệu', 'API · Liên thông · Dữ liệu dùng chung · Kho dữ liệu', 'ly2', 292, 542, 1016, 370],
  ['01', 'Hạ tầng & an toàn', 'Mạng · Máy chủ · Lưu trữ · Sao lưu · An toàn thông tin', 'ly1', 250, 682, 1100, 400],
];
const lyStep = [2, 2, 1, 0];
const side11 = [0, 1, 2, 3, 4].map((k) => [`M-10 ${270 + k * 100} C140 ${270 + k * 100} 150 ${300 + k * 108} 300 ${310 + k * 104}`, 0, 2 + k * .3, 1, k % 2 ? 't' : '', 'thin'])
  .concat([0, 1, 2, 3, 4].map((k) => [`M1610 ${270 + k * 100} C1460 ${270 + k * 100} 1450 ${300 + k * 108} 1300 ${310 + k * 104}`, 0, 2.2 + k * .3, 1, k % 2 ? '' : 't', 'thin']));
S.push({ name: 'Công nghệ & dữ liệu', pptx: 11, n: 4, html: `
  ${head({ k: 'Định hướng 2027–2030', t: 'Công nghệ & dữ liệu<span class="sub">Từ hạ tầng CNTT<br><em>đến nền tảng vận hành số dùng chung</em></span>', hs: 58, top: 26 })}
  ${net(side11)}
  ${ly11.map(([n, t, d, img, x, y, w, iw], k) => `<div class="glass slab ${k === 3 ? 'navy' : k === 1 ? 'teal' : ''} abs" ${A(k === 3 ? 'up' : 'flip', lyStep[k], k === 0 ? 1 : 0, P(x, y, w, 118))}>
      <span class="tab" ${A('left', lyStep[k], k === 0 ? 1.5 : .5)}>${n}</span><div class="slt"><b>${t}</b><small>${d}</small></div>
      ${pic(img, A('fade', lyStep[k], k === 0 ? 2 : 1, `right:14px;top:4px;width:${iw}px;height:110px`), 'mk')}</div>`).join('')}
  ${net([['M1022 690 V650', 1, 1.5, 1], ['M930 550 V510', 2, 1.4, 1, 't'], ['M870 410 V372', 2, 2.4, 1]])}
  ${msg('Kết nối được · Dữ liệu dùng chung · Giám sát được · An toàn · Sẵn sàng mở rộng', 3, 0, 'shield-check', '', 'bottom:16px;font-size:24px')}` });

/* 12 ─ GIS */
const rows12 = [['wrench', ''], ['users', ''], ['file-text', 'o'], ['alert-triangle', 'r'], ['gauge', ''], ['droplet', ''], ['wrench', 'g']];
const lay12 = [['wrench', 'Kỹ thuật', 'Đường ống · Van · ĐHN · Tài sản · Sự cố · Công tác', 540, 326, 458], ['users', 'Kinh doanh', 'Khách hàng · Tiêu thụ · Công nợ · Khiếu nại · Đóng/Mở nước', 540, 490, 560], ['gauge', 'Giám sát', 'Áp lực · Lưu lượng · Chất lượng nước · Cảnh báo', 540, 648, 456]];
S.push({ name: 'GIS – không gian chung', pptx: 12, n: 4, html: `
  ${head({ k: 'Định hướng 2027–2030', t: 'GIS – không gian vận hành chung<span class="sub">Từ dữ liệu trong bảng biểu<br><em>đến nhìn thấy vấn đề trên không gian</em></span>', hs: 52, top: 22 })}
  <div class="glass tbl abs" ${A('left', 0, 2, P(24, 232, 388, 482))}>
    <div class="tr th"><i></i><i></i><i></i><i></i></div>
    ${rows12.map(([i, c], k) => `<div class="tr ${c}" ${A('left', 0, 2.4 + k * .2)}><span class="ti ${c}">${ic(i)}</span><span class="tb"><i></i><i></i></span><span class="tc"><i></i></span><span class="td"><b></b><i></i></span></div>`).join('')}
  </div>
  ${pic('gis', A('zoom', 1, 0, P(545, 190, 1050, 590)), 'gisp')}
  ${lay12.map(([i, t, d, x, y, w], k) => `<div class="glass lay12 abs" ${A('right', 1, 1 + k * .6, P(x, y, w, 82))}>${ib(i, 'soft lg')}<div><b>${t}</b><small>${d}</small></div></div>`).join('')}
  ${net([['M412 312 C470 312 480 367 538 367', 2, 0, 1], ['M412 373 C480 373 470 531 538 531', 2, .3, 1, 't'], ['M412 434 C480 434 470 531 538 531', 2, .6, 1, 'o'], ['M412 495 C480 495 470 531 538 531', 2, .9, 1, 'r'], ['M412 556 C480 556 470 689 538 689', 2, 1.2, 1]])}
  <div class="abs" ${A('zoom', 2, 2, P(1247, 318, 120, 100))}><i class="pulse red" style="inset:0"></i><i class="pulse red r2" style="inset:0"></i></div>
  <div class="pill red hot abs" ${A('down', 2, 2.4, P(1232, 276))}>${ic('map-pin')}Khu vực cần chú ý</div>
  ${msg('Một không gian · <em>Nhiều lớp dữ liệu</em> · Một góc nhìn vận hành', 3, 0, 'layers', '', 'bottom:22px')}` });

/* 13 ─ Phân tích & AI */
const c13 = [['Phát hiện', 'Có gì bất thường?', 'Tiêu thụ bất thường · Áp lực bất thường · Khiếu nại tập trung', 'ch1', 722, 272, ''], ['Dự báo', 'Có thể xảy ra gì?', 'Nhu cầu sử dụng nước · Nguy cơ sự cố · Xu hướng công nợ', 'ch2', 1008, 272, ''], ['Ưu tiên', 'Cần chú ý gì trước?', 'Khu vực cần kiểm tra · Tài sản cần quan tâm · Trường hợp cần xử lý', 'ch3', 1294, 282, 'teal']];
S.push({ name: 'Phân tích dữ liệu & AI', pptx: 13, n: 4, html: `
  ${head({ k: 'Định hướng 2027–2030', t: 'Phân tích dữ liệu & AI<span class="sub">Từ nhìn thấy vấn đề<br><em>đến phát hiện sớm · dự báo · ưu tiên</em></span>', hs: 62, top: 52 })}
  ${pic('data13', A('left', 0, 2, P(15, 150, 290, 580)), 'mk')}
  ${net([['M300 300 C360 320 360 420 420 430', 0, 3, 1, '', 'thin'], ['M300 470 C340 470 360 450 400 450', 0, 3.2, 1, 't', 'thin'], ['M300 640 C360 620 360 500 420 480', 0, 3.4, 1, 'o', 'thin']])}
  <div class="abs" ${A('spin', 0, 2.5, P(352, 272, 336, 336))}><i class="halo" style="inset:0"></i><i class="halo rev" style="inset:-14px"></i></div>
  ${pic('orb13', A('zoom', 0, 3, P(370, 290, 300, 300)), 'mr')}
  <div class="pill orbl abs" ${A('up', 0, 3.4, P(395, 594))}>Phân tích dữ liệu</div>
  ${c13.map(([t, q, d, img, x, w, c], k) => `<div class="glass c13 ${c} abs" ${A('flip', 1, k * .8, P(x, 280, w, 456))}>
      <span class="badge ${c}" ${A('spin', 1, k * .8 + .5)}>0${k + 1}</span><b class="c13t">${t}</b><span class="pill ghost c13q">${q}</span>
      ${pic(img, A('zoom', 2, k * .6, `left:8px;right:8px;top:192px;height:150px;width:auto`), 'me')}
      <p class="c13d" ${A('up', 2, k * .6 + .4)}>${d}</p></div>
    <i class="nudge chv abs" style="${P(x - 30, 488)}">${ic('chevron-right')}</i>`).join('')}
  ${msg('Nhìn sớm hơn · <em>Dự báo tốt hơn</em> · <em>Ưu tiên đúng hơn</em>', 3, 0, 'eye', '', 'bottom:22px;font-size:30px')}` });

/* 14 ─ Giám sát & điều hành */
const icRow = (arr, s, i0, c = '') => `<div class="irow ${c}">${arr.map(([i, t, cc = ''], k) => `<span ${A('up', s, i0 + k * .2)}>${ib(i, 'soft ' + cc)}<b>${t}</b></span>`).join('')}</div>`;
S.push({ name: 'Giám sát & điều hành', pptx: 14, n: 4, html: `
  ${head({ k: 'Định hướng 2027–2030', t: 'Giám sát & điều hành tập trung<span class="sub">Từ giám sát chuyên biệt<br><em>đến góc nhìn điều hành tổng hợp</em></span>', hs: 52, top: 20 })}
  <div class="glass mon abs" ${A('left', 0, 2.2, P(40, 190, 815, 240))}>
    ${pic('scada', A('fade', 0, 3, P(560, 8, 248, 200)), 'mk')}
    <span class="badge abs" style="${P(16, 14)}">01</span><div class="mon-h"><b>SCADA</b><small>Quá trình & mạng lưới nước</small></div>
    <p class="mon-q">Mạng lưới nước đang vận hành thế nào?</p>
    ${icRow([['gauge', 'Áp lực'], ['waves', 'Lưu lượng'], ['droplet', 'Chất lượng nước'], ['settings', 'Thiết bị'], ['file-text', 'Trạng thái'], ['alert-triangle', 'Cảnh báo', 'r']], 0, 3)}
    <div class="mon-f">Giám sát quá trình · Điều khiển theo phân quyền</div></div>
  <div class="glass mon abs" ${A('left', 1, 0, P(40, 440, 815, 252))}>
    ${pic('noc', A('fade', 1, 1, P(560, 14, 245, 200)), 'mk')}
    <span class="badge abs" style="${P(16, 14)}">02</span><div class="mon-h"><b>NOC</b><small>Hạ tầng số & kết nối vận hành</small></div>
    <p class="mon-q">Hạ tầng số phục vụ vận hành có đang ổn định?</p>
    ${icRow([['network', 'Mạng IT/OT'], ['server', 'Máy chủ'], ['app-window', 'Ứng dụng'], ['database', 'Cơ sở dữ liệu'], ['radio-tower', 'Đường truyền'], ['wifi', 'Kết nối hiện trường'], ['alert-triangle', 'Cảnh báo', 'r']], 1, .6, 'n7')}
    <div class="mon-f">Sẵn sàng · Kết nối · Hiệu năng</div></div>
  <div class="glass mon dl abs" ${A('left', 1, 1, P(40, 702, 815, 100))}>
    ${ib('file-check', 'lg')}<div><b class="dl-t">Dữ liệu nghiệp vụ</b>
    ${icRow([['bar-chart-2', 'Kinh doanh'], ['users', 'Kỹ thuật'], ['file-text', 'Tham mưu'], ['settings', 'Sự cố'], ['bell', 'Cảnh báo']], 1, 1.6, 'inl')}</div></div>
  ${net([['M855 310 C930 310 930 470 990 480', 2, 0, 2], ['M855 566 C930 566 930 515 990 515', 2, .3, 2], ['M855 752 C940 752 930 560 990 552', 2, .6, 2, 'o']])}
  <div class="glass ioc abs" ${A('right', 2, .6, P(990, 200, 590, 602))}>
    <span class="badge abs" style="${P(18, 18)}">03</span><div class="ioc-h"><b>IOC</b><small>Góc nhìn điều hành tổng hợp</small></div>
    <p class="mon-q c">Toàn hệ thống có gì cần chú ý?</p>
    ${icRow([['bar-chart-2', 'Kinh doanh'], ['users', 'Kỹ thuật'], ['file-text', 'Tham mưu'], ['settings', 'Sự cố'], ['alert-triangle', 'Cảnh báo', 'r']], 2, 1.2, 'c')}
    ${pic('ioc', A('zoom', 2, 1.6, P(24, 238, 542, 206)), 'me')}
    <div class="ioc-b">${[['trending-up', 'Trạng thái', ''], ['alert-triangle', 'Cảnh báo', 'orange'], ['siren', 'Sự cố', 'red'], ['users', 'Phối hợp', 'teal']].map(([i, t, c], k) => `<span ${A('spin', 2, 2.2 + k * .3)}>${ib(i, 'lg ' + c)}<b>${t}</b></span>`).join('')}</div></div>
  ${msg('Góc nhìn tập trung · Điều khiển theo phân quyền · <em>Vận hành an toàn & liên tục</em>', 3, 0, 'radar', '', 'bottom:12px;font-size:22px;padding-top:9px;padding-bottom:9px')}` });

/* 15 ─ Digital Twin */
const in15 = [['in1', 'GIS'], ['in2', 'SCADA'], ['in3', 'Mô hình<br>thủy lực'], ['in4', 'Nhu cầu<br>nước']];
const sc15 = [['Đóng van', 'Khu vực nào bị ảnh hưởng?', 'sc1', 1102, 212, 232, 280], ['Giảm áp', 'Khu vực nào có nguy cơ nước yếu?', 'sc2', 1344, 212, 238, 280], ['Sự cố ống', 'Khách hàng nào bị tác động?', 'sc3', 1102, 502, 232, 294], ['Thay đổi nhu cầu', 'Mạng lưới phản ứng ra sao?', 'sc4', 1344, 502, 238, 294]];
S.push({ name: 'Digital Twin', pptx: 15, n: 4, html: `
  ${head({ k: 'Định hướng 2027–2030', t: 'Digital Twin ngành nước<span class="sub">Từ nhìn thấy hiện trạng<br><em>đến mô phỏng “nếu… thì sao?”</em></span>', hs: 60, top: 16 })}
  <div class="glass inp abs" ${A('left', 0, 2.2, P(20, 212, 306, 586))}><div class="inp-t">Dữ liệu đầu vào</div>
    ${in15.map(([img, t], k) => `<div class="inr" ${A('left', 0, 2.6 + k * .35)}>${pic(img, '', 'mul')}<b>${t}</b></div>`).join('')}</div>
  ${net([['M326 336 C380 336 380 420 430 420', 1, 0, 1], ['M326 466 C380 466 390 445 430 445', 1, .2, 1], ['M326 596 C380 596 390 475 430 475', 1, .4, 1, 't'], ['M326 726 C390 726 380 505 430 505', 1, .6, 1, 'o']])}
  <div class="disc twin abs" ${A('zoom', 1, 1, P(452, 560, 586, 200))}><i class="halo" style="inset:16px 40px"></i><b>Digital Twin</b><small>Mô hình vận hành số</small></div>
  ${pic('twin', A('zoom', 1, 1.6, P(420, 206, 650, 375)), 'me')}
  ${net([['M1060 330 C1080 300 1085 290 1100 290', 2, 0, 1], ['M1066 420 C1085 420 1085 440 1100 440', 2, .2, 1], ['M1060 480 C1085 520 1080 575 1100 578', 2, .4, 1]])}
  ${sc15.map(([t, q, img, x, y, w, h], k) => `<div class="glass scn abs" ${A('right', 2, .4 + k * .45, P(x, y, w, h))}><b>${t}</b><small>${q}</small>${pic(img, '', 'scnp')}</div>`).join('')}
  ${msg('Mô phỏng trước · Đánh giá tác động · <em>Hỗ trợ lựa chọn phương án</em>', 3, 0, 'git-merge', '', 'bottom:16px')}` });

/* 16 ─ Điều hành dựa trên dữ liệu */
const src16 = [['bar-chart-2', 'Kinh doanh', 'Tiêu thụ · Doanh thu · Công nợ · Khiếu nại', ''], ['settings', 'Kỹ thuật', 'Sự cố · Áp lực · Tài sản · Công tác', 'teal'], ['users', 'Tham mưu', 'Nguồn lực · Tiến độ · Nhiệm vụ · Dự án', 'purple'], ['cloud', 'Công nghệ', 'Hạ tầng · Hệ thống · Kết nối · Cảnh báo', '']];
const q16 = [['map-pin', 'Ở đâu?', ''], ['alert-triangle', 'Mức độ ảnh hưởng?', 'orange'], ['users', 'Đơn vị nào đang xử lý?', ''], ['clock', 'Tiến độ ra sao?', 'teal'], ['file-text', 'Cần can thiệp gì?', '']];
S.push({ name: 'Điều hành dựa trên dữ liệu', pptx: 16, n: 4, html: `
  ${head({ k: 'Định hướng 2027–2030', t: 'Điều hành dựa trên dữ liệu<span class="sub">Từ xem nhiều báo cáo<br><em>đến tập trung đúng vấn đề cần quyết định</em></span>', hs: 58, top: 56 })}
  ${src16.map(([i, t, d, c], k) => `<div class="glass src abs" ${A('left', 0, 2.4 + k * .35, P(32, 290 + k * 117, 470, 100))}>${ib(i, 'lg ' + c)}<div><b>${t}</b><small>${d}</small></div></div>`).join('')}
  ${net(src16.map((_, k) => [`M502 ${340 + k * 117} C600 ${340 + k * 117} 600 505 688 505`, 1, k * .3, 2, ['', 'o', 'p', ''][k]]))}
  ${pic('pod16', A('up', 1, 1, P(560, 616, 540, 112)), 'me')}
  <div class="orb16 abs" ${A('zoom', 1, 1.5, P(680, 352, 300, 300))}><i class="halo" style="inset:-18px"></i><i class="halo rev" style="inset:-6px"></i>
    <span class="bell">${ic('bell-ring')}</span><b>Hôm nay<br>có gì<br>cần chú ý?</b>
    ${[[30, 70, 'o'], [262, 50, 'r'], [16, 210, 'o'], [270, 230, 'b'], [180, -4, 'o']].map(([x, y, c]) => `<i class="od ${c}" style="${P(x, y)}"></i>`).join('')}</div>
  <div class="bigar abs" ${A('right', 2, 0, P(1012, 438, 120, 134))}>${ic('chevron-right')}</div>
  ${net(q16.map((_, k) => [`M1128 505 C1180 505 1160 ${332 + k * 96} 1206 ${332 + k * 96}`, 2, .4 + k * .2, 0]))}
  ${q16.map(([i, t, c], k) => `<div class="glass q16 abs" ${A('right', 2, .8 + k * .35, P(1206, 292 + k * 96, 374, 80))}>${ib(i, c)}<b>${t}</b></div>`).join('')}
  ${msg('Nhìn đúng vấn đề · Rõ trách nhiệm · <em>Quyết định kịp thời</em>', 3, 0, 'target', '', 'bottom:22px;font-size:32px')}` });

/* 17 ─ Nguyên tắc triển khai */
const cr17 = [['search', 'Nhu cầu thực tế', 'Bài toán cần giải quyết'], ['users', 'Mức độ ưu tiên', 'Tác động đến vận hành & khách hàng'], ['bar-chart-2', 'Hiệu quả đầu tư', 'Giá trị so với chi phí & nguồn lực'], ['database', 'Độ sẵn sàng dữ liệu', 'Dữ liệu đủ · Đúng · Có thể khai thác'], ['share-2', 'Khả năng tích hợp', 'Kết nối vào hệ sinh thái chung'], ['settings', 'Năng lực vận hành', 'Con người · Quy trình · Khả năng duy trì']];
const fd17 = [['shield-check', 'An toàn thông tin'], ['database', 'Quản trị dữ liệu'], ['share-2', 'Tiêu chuẩn tích hợp'], ['users', 'Đào tạo & quản trị thay đổi']];
S.push({ name: 'Nguyên tắc triển khai', pptx: 17, n: 4, html: `
  ${head({ k: 'Định hướng 2027–2030', t: 'Nguyên tắc triển khai 2027–2030<span class="sub">Ưu tiên theo giá trị & độ sẵn sàng<br><em>Không đóng khung theo từng năm</em></span>', hs: 54, top: 56 })}
  <div class="side-l abs" ${A('left', 0, 2, P(60, 216))}>Danh mục đề xuất</div>
  ${pic('prop', A('left', 0, 2.5, P(40, 256, 300, 420)), 'me')}
  ${net([0, 1, 2, 3, 4].map((k) => [`M330 ${330 + k * 70} C380 ${330 + k * 70} 380 ${420 + k * 25} 430 ${420 + k * 25}`, 1, k * .25, 1, k % 2 ? 't' : '', 'thin']))}
  <div class="lens abs" ${A('zoom', 1, 0, P(420, 242, 770, 464))}><i class="lend l"></i><i class="lend r"></i></div>
  ${cr17.map(([i, t, d], k) => { const x = 603 + (k % 3) * 200, y = k < 3 ? 372 : 586; return `<div class="crc abs" ${A('spin', 1, .6 + k * .45, P(x - 100, y - 100, 200, 200))}><span class="crn">0${k + 1}</span>${ic(i)}<b>${t}</b><small>${d}</small></div>`; }).join('')}
  ${net([['M1190 410 C1240 410 1250 400 1310 400', 2, 0, 1], ['M1190 475 H1320', 2, .2, 1], ['M1190 540 C1240 540 1250 550 1310 550', 2, .4, 1]])}
  <div class="side-l abs" ${A('right', 2, .4, P(1300, 262))}>Danh mục ưu tiên</div>
  ${pic('prio', A('right', 2, .8, P(1330, 306, 245, 300)), 'me')}
  <div class="glass fd17 abs" ${A('wipe', 2, 1.2, P(50, 714, 1500, 80))}>${fd17.map(([i, t], k) => `${k ? '<i class="vs"></i>' : ''}<span ${A('up', 2, 1.6 + k * .3)}>${ib(i, 'soft lg')}<b>${t}</b></span>`).join('')}</div>
  ${msg('Đúng nhu cầu · Đúng ưu tiên · Đủ điều kiện · <em>Tạo giá trị</em>', 3, 0, 'check-circle', '', 'bottom:18px;font-size:30px')}` });

/* 18 ─ Giá trị kỳ vọng & kiến nghị */
const v18 = [['settings', 'Chủ động hơn trong vận hành', 'Nhìn thấy · Phát hiện sớm · Phối hợp nhanh', 20, 192, 525, 'left'], ['file-search', 'Điều hành minh bạch hơn', 'Một góc nhìn chung · Rõ trách nhiệm · Rõ tiến độ', 1055, 192, 525, 'right'], ['trending-up', 'Sử dụng nguồn lực hiệu quả hơn', 'Đầu tư đúng ưu tiên · Khai thác dữ liệu · Tối ưu nguồn lực', 20, 452, 525, 'left'], ['users', 'Phục vụ khách hàng tốt hơn', 'Hiểu xuyên suốt · Xử lý nhanh · Giảm gián đoạn', 1055, 452, 525, 'right']];
const r18 = [['signpost', 'Thống nhất định hướng 2027–2030'], ['clipboard-check', 'Rà soát & xác định danh mục<br>ưu tiên theo từng thời điểm'], ['layers', 'Triển khai từng bước theo nhu cầu, nguồn lực & điều kiện thực tế']];
S.push({ name: 'Giá trị & kiến nghị', pptx: 18, n: 4, cls: 'close', html: `
  ${head({ k: 'Định hướng 2027–2030', t: 'Giá trị kỳ vọng & kiến nghị', hs: 60, top: 44, lead: 'Thống nhất định hướng · Triển khai linh hoạt · Từng bước tạo giá trị' })}
  ${pic('drop18', A('zoom', 0, 2.5, P(590, 172, 420, 230)), 'me')}
  <div class="abs" ${A('fade', 0, 3, P(640, 330, 320, 80))}><i class="pulse" style="inset:0"></i><i class="pulse r2" style="inset:0"></i></div>
  
  ${net([['M545 262 C640 262 660 300 720 320', 1, .4, 1], ['M1055 262 C960 262 950 300 880 320', 1, .6, 1], ['M545 522 C580 522 575 470 562 456', 1, .8, 1, 'o'], ['M1055 522 C1020 522 1025 470 1038 456', 1, 1, 1, 'o']])}
  <div class="stmt abs" ${A('up', 0, 3.2, P(548, 414, 504))}>Nhà Bè – doanh nghiệp cấp nước<br>vận hành dựa trên dữ liệu</div>
  ${v18.map(([i, t, d, x, y, w, a], k) => `<div class="glass v18 ${a === 'right' ? 'rt' : ''} abs" ${A(a, 1, k * .4, P(x, y, w, 128))}>${ib(i, 'xl soft')}<div><span class="num">0${k + 1}</span><b>${t}</b><small>${d}</small></div></div>`).join('')}
  <div class="kn abs" ${A('zoom', 2, 0, P(0, 606, 1600))}><i></i><b>Kiến nghị</b><i></i></div>
  ${r18.map(([i, t], k) => `<div class="glass r18 abs" ${A('up', 2, .5 + k * .45, P(28 + k * 524, 676, 500, 114))}>${ib(i, 'soft lg')}<b>${t}</b></div>`).join('')}
  ${msg('Không chạy theo công nghệ · <em>Tập trung vào giá trị vận hành</em>', 3, 0, 'droplet', '', 'bottom:16px;font-size:28px')}` });

window.SCENES = S;
